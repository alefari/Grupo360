import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  constructor(private http: HttpClient) { }

  API_URI = environment.dirBackend;

  getCargos() {
    return this.http.get(`${this.API_URI}/cargos`);
  }

  // getCategoria(id: string) {
  //   return this.http.get(`${this.API_URI}/categorias/${id}`);
  // }

  // createCategoria(categoria: any) {
  //   return this.http.post(`${this.API_URI}/categorias`, categoria);
  // }

  // deleteCategoria(id: string) {
  //   return this.http.delete(`${this.API_URI}/categorias/${id}`);
  // }

  // updateCategoria(id: string, categoria: string) {
  //   return this.http.put(`${this.API_URI}/categorias/${id}`, categoria);
  // }

}

