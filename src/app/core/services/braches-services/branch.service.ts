import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environmentDev } from '../../../environments/environment.development';
import { Filter } from '../../interfaces/api/filters';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  private readonly _apiUrl: String = environmentDev.apiUrl;
  private readonly _httpclient = inject(HttpClient);

  getBranches(page: number, size: number, filters?: Filter[]): Observable<any> {
    // Construir params base
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', size.toString());

    // Agregar filtros a los params en lugar de concatenar a la URL
    if (filters?.length) {
      filters.forEach((filter) => {
        params = params.append(`filters[${filter.key}]`, filter.value);
      });
    }

    // Usar params en la llamada HTTP
    return this._httpclient.get(`${this._apiUrl}branches`, {
      params,
      withCredentials: true,
    });
  }

  createBranch(branch: any): Observable<any> {
    return this._httpclient.post(`${this._apiUrl}branches`, branch, {
      withCredentials: true,
    });
  }

  updateBranch(branch: any): Observable<any> {
    return this._httpclient.put(
      `${this._apiUrl}branches/${branch.sucursalId}`,
      branch,
      { withCredentials: true }
    );
  }
}
