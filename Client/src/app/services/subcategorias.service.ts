import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriasService {

  API_URI = environment.dirBackend;

  constructor(private http: HttpClient) { }

  getSubcategorias() {
    return this.http.get(`${this.API_URI}/subcategorias`);
  }

  getSubcategoria(id: string) {
    return this.http.get(`${this.API_URI}/subcategorias/${id}`);
  }

  createSubcategoria(subcategoria: any) {
    return this.http.post(`${this.API_URI}/subcategorias`, subcategoria);
  }

  deleteSubcategoria(id: string) {
    return this.http.delete(`${this.API_URI}/subcategorias/${id}`);
  }

  updateSubcategoria(id: string, subcategoria: string) {
    return this.http.put(`${this.API_URI}/subcategorias/${id}`, subcategoria);
  }
}
