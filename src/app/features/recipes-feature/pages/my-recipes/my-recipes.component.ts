import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-my-recipes',
  imports: [],
  templateUrl: './my-recipes.component.html',
  styleUrl: './my-recipes.component.scss'
})
export class MyRecipesComponent {
  private readonly _title = inject(Title);

  ngOnInit(): void {
    this._title.setTitle('Mis Recetas | NutriApp');
  }
}
