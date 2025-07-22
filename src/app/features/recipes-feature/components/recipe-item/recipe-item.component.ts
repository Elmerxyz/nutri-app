import { Component, input } from '@angular/core'; 
import { Meal } from '../../interfaces/recipe.interface';
import { Tag } from 'primeng/tag';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";

@Component({
  selector: 'app-recipe-item',
  imports: [Tag, ButtonComponent],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {
  
   meal = input<Meal>({} as Meal);
}
