import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-recomendations',
  imports: [],
  templateUrl: './recomendations.component.html',
  styleUrl: './recomendations.component.scss',
})
export class RecomendationsComponent {
  private readonly _title = inject(Title);

  ngOnInit(): void {
    this._title.setTitle('Recomendaciones | NutriApp');
  }

  // Aquí puedes agregar las recomendaciones que desees mostrar
  recommendations: string[] = [
    'Mantén una dieta equilibrada y variada.',
    'Bebe suficiente agua a lo largo del día.',
    'Realiza actividad física regularmente.',
    'Consulta a un profesional de la salud para un plan personalizado.',
  ];
}
