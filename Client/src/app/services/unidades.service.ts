import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  API_URI = environment.dirBackend;

  constructor(private http: HttpClient) { }

  getUnidades() {
    return this.http.get(`${this.API_URI}/unidades`);
  }

  getUnidad(id: string) {
    return this.http.get(`${this.API_URI}/unidades/${id}`);
  }

  createUnidad(unidad: any) {
    return this.http.post(`${this.API_URI}/unidades`, unidad);
  }

  deleteUnidad(id: string) {
    return this.http.delete(`${this.API_URI}/unidades/${id}`);
  }

  updateUnidad(id: string, unidad: string) {
    return this.http.put(`${this.API_URI}/unidades/${id}`, unidad);
  }
}
