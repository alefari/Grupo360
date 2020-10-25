import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {

  API_URI = environment.dirBackend;

  constructor(private http: HttpClient) { }

  getUbicaciones() {
    return this.http.get(`${this.API_URI}/ubicaciones`);
  }

  getUbicacion(id: string) {
    return this.http.get(`${this.API_URI}/ubicaciones/${id}`);
  }

  createUbicacion(categoria: string) {
    return this.http.post(`${this.API_URI}/ubicaciones`, categoria);
  }

  deleteUbicacion(id: string) {
    return this.http.delete(`${this.API_URI}/ubicaciones/${id}`);
  }

  updateUbicacion(id: string, categoria: string) {
    return this.http.put(`${this.API_URI}/ubicaciones/${id}`, categoria);
  }
}
