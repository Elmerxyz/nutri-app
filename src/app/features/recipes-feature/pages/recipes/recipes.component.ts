import { Component, inject } from '@angular/core';
import {
  MealPlan,
  Meal,
  MedicalCondition,
  MealType,
} from '../../interfaces/recipe.interface';
import { RecipeItemComponent } from '../../components/recipe-item/recipe-item.component';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { InputFormComponent } from '../../../../shared/components/forms/input-form/input-form.component';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { RecipesServicesService } from '../../../../core/services/recipes-services/recipes-services.service';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
interface FilterOption {
  label: string;
  value: string;
}

interface ApiResponse {
  status: string;
  message: string;
  data: {
    recipes: Meal[];
    nextPageToken: string | null;
    totalCount: number;
    limit: number;
  };
}

@Component({
  selector: 'app-recipes',
  imports: [
    RecipeItemComponent,
    SelectButton,
    FormsModule,
    InputFormComponent,
    PaginatorModule,
    ButtonComponent,
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
  private readonly _recipesServices = inject(RecipesServicesService);
  private readonly _router = inject(Router);
  private readonly _title = inject(Title);

  // Estado de carga
  loading: boolean = false;

  // Datos de recetas
  recipes: Meal[] = [];
  filteredMeals: Meal[] = [];
  paginatedMeals: Meal[] = [];
  nextPageToken: string | null = null;
  totalRecipes: number = 0;

  // Paginación
  currentPage: number = 0;
  itemsPerPage: number = 12;

  // Búsqueda
  searchQuery: string = '';

  // Opciones para filtros
  medicalConditionOptions: FilterOption[] = [
    { label: 'Todos', value: 'all' },
    { label: 'Gastritis', value: 'gastritis' },
    { label: 'Anemia', value: 'anemia' },
  ];

  mealTypeOptions: FilterOption[] = [
    { label: 'Todos', value: 'all' },
    { label: 'Desayuno', value: 'desayuno' },
    { label: 'Almuerzo', value: 'almuerzo' },
    { label: 'Cena', value: 'cena' },
  ];

  // Valores seleccionados
  selectedCondition: string = 'all';
  selectedMealType: string = 'all';

  // Math para el template
  Math = Math;

  constructor() {}

  ngOnInit() {
    // Cargar recetas al iniciar el componente
    this.loadRecipes();
    this._title.setTitle('Recetas | NutriApp');
  }

  loadRecipes(nextPageToken?: string, pageSize: number = 10): void {
    this.loading = true;

    this._recipesServices
      .getRecipes(nextPageToken, pageSize)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (response: ApiResponse) => {
          // Extraer datos de la respuesta API
          const { recipes, nextPageToken: token, totalCount } = response.data;

          if (nextPageToken) {
            // Agregar más recetas a la lista existente (paginación)
            this.recipes = [...this.recipes, ...recipes];
          } else {
            // Primera carga o actualización completa
            this.recipes = recipes;
          }

          this.nextPageToken = token;
          this.totalRecipes = totalCount;

          // Aplicar filtros actuales
          this.filterRecipes();
        },
        error: (error) => {},
      });
  }

  // Método para filtrar recetas
  filterRecipes(): void {
    this.filteredMeals = this.recipes.filter((meal) => {
      const conditionMatch =
        this.selectedCondition === 'all' ||
        meal.suitableFor.includes(this.selectedCondition as MedicalCondition);

      const mealTypeMatch =
        this.selectedMealType === 'all' ||
        meal.mealTypes.includes(this.selectedMealType as MealType);

      const searchMatch =
        this.searchQuery === '' ||
        meal.name.toLowerCase().includes(this.searchQuery.toLowerCase());

      return conditionMatch && mealTypeMatch && searchMatch;
    });

    this.currentPage = 0; // Reset pagination
    this.updatePagination();
  }

  // Actualizar paginación
  updatePagination(): void {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedMeals = this.filteredMeals.slice(startIndex, endIndex);

    // Cargar más datos si estamos cerca del final y hay más datos disponibles
    if (endIndex >= this.recipes.length - 5 && this.nextPageToken) {
      this.loadMoreRecipes();
    }
  }

  // Cargar más recetas cuando se necesite
  loadMoreRecipes(): void {
    if (this.nextPageToken && !this.loading) {
      this.loadRecipes(this.nextPageToken);
    }
  }

  // Manejar cambio de página
  onPageChange(event: any): void {
    this.currentPage = event.page;
    this.updatePagination();
  }

  // Búsqueda
  onSearchChange(): void {
    this.filterRecipes();
  }

  performSearch(): void {
    this.filterRecipes();
  }

  // Métodos para manejar cambios en filtros
  onConditionChange(): void {
    this.filterRecipes();
  }

  onMealTypeChange(): void {
    this.filterRecipes();
  }

  // Método para limpiar filtros
  clearFilters(): void {
    this.selectedCondition = 'all';
    this.selectedMealType = 'all';
    this.filterRecipes();
  }

  // Limpiar todos los filtros incluyendo búsqueda
  clearAllFilters(): void {
    this.selectedCondition = 'all';
    this.selectedMealType = 'all';
    this.searchQuery = '';
    this.filterRecipes();
  }

  // Para la plantilla
  get mealPlan(): MealPlan {
    return { meals: this.paginatedMeals };
  }

  viewRecipeDetail(recipeId: string): void {
    this._router.navigate(['/nutri/recipes', recipeId]);
  }
}
