import { Component } from '@angular/core';
import {
  MealPlan,
  Meal,
  MedicalCondition,
  MealType,
} from '../../interfaces/recipe.interface';
import { data } from '../../../../core/services/data.service';
import { RecipeItemComponent } from '../../components/recipe-item/recipe-item.component';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton'; 
import { InputFormComponent } from "../../../../shared/components/forms/input-form/input-form.component";
import { PaginatorModule } from 'primeng/paginator';
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";
interface FilterOption {
  label: string;
  value: string;
}
@Component({
  selector: 'app-recipes',
  imports: [RecipeItemComponent, SelectButton, FormsModule, InputFormComponent, PaginatorModule, ButtonComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
 mealPlan: MealPlan = {
    meals: data,
  };

  filteredMeals: Meal[] = [...data];
  paginatedMeals: Meal[] = [];
  
  // Paginación
  currentPage: number = 0;
  itemsPerPage: number = 12;
  
  // Búsqueda
  searchQuery: string = '';

  // Opciones para filtros
  medicalConditionOptions: FilterOption[] = [
    { label: 'Todos', value: 'all' },
    { label: 'Gastritis', value: 'gastritis' },   
  ];

  mealTypeOptions: FilterOption[] = [
    { label: 'Todos', value: 'all' },
    { label: 'Desayuno', value: 'breakfast' },
    { label: 'Almuerzo', value: 'lunch' },
    { label: 'Cena', value: 'dinner' }, 
  ];

  // Valores seleccionados
  selectedCondition: string = 'all';
  selectedMealType: string = 'all';

  // Math para el template
  Math = Math;

  constructor() {
    this.updatePagination();
  }

  // Método para filtrar recetas
  filterRecipes(): void {
    this.filteredMeals = data.filter((meal) => {
      const conditionMatch =
        this.selectedCondition === 'all' ||
        meal.suitable_for.includes(this.selectedCondition as MedicalCondition);

      const mealTypeMatch =
        this.selectedMealType === 'all' ||
        meal.meal_types.includes(this.selectedMealType as MealType);

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
}
