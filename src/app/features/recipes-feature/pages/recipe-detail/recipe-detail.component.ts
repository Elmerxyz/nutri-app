import { Component, inject, signal } from '@angular/core';
import { RecipesServicesService } from '../../../../core/services/recipes-services/recipes-services.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  imports: [RouterLink],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent {
  private readonly _recipeService = inject(RecipesServicesService);
  private readonly _route = inject(ActivatedRoute);
  recipeId = signal<string>('');
  recipe = signal<any | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  ngOnInit(): void {
    // Obtener el ID de la receta desde los parámetros de la URL
    this._route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.recipeId.set(id);
        this.loadData();
      }
    });
  }

  loadData(): void {
    this.loading.set(true);
    this.error.set(null);

    this._recipeService.getRecipeById(this.recipeId()).subscribe({
      next: (response) => {
        if (response && response.data) {
          this.recipe.set(response.data);
        } else {
          this.error.set('No se encontraron datos de la receta');
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar los detalles de la receta');
        this.loading.set(false);
      },
    });
  }
}
