import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environmentDev } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesServicesService {
  private readonly _apiUrl: String = environmentDev.apiUrl;
  private readonly _httpclient = inject(HttpClient);
  constructor() {}

  getRecipes(nextPageToken?: string, pageSize?: number): Observable<any> {
    let params = new HttpParams();

    if (nextPageToken) {
      params = params.set('startAfterId', nextPageToken);
    }

    if (pageSize) {
      params = params.set('pageSize', pageSize.toString());
    }

    return this._httpclient.get(`${this._apiUrl}recipes`, { params });
  }

  getRecipeById(id: string): Observable<any> {
    return this._httpclient.get(`${this._apiUrl}recipes/${id}`);
  }
}
