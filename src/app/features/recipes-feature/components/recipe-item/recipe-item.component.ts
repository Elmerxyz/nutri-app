import { Component, input, output } from '@angular/core';
import { Meal } from '../../interfaces/recipe.interface';
import { Tag } from 'primeng/tag';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';

@Component({
  selector: 'app-recipe-item',
  imports: [Tag, ButtonComponent],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {
  meal = input<Meal>({} as Meal);
  recipeId = output<string>();

  onRecipeClick(id: string): void {
    this.recipeId.emit(id);
  }
}
