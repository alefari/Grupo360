import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ingreso } from '../modulo_inventario/inventario_models/ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  API_URI = environment.dirBackend;

  constructor(private http: HttpClient) { }

  getIngresos() {
    return this.http.get(`${this.API_URI}/ingresos`);
  }

  // getItem(id: string) {
  //   return this.http.get(`${this.API_URI}/herramientas/${id}`);
  // }

  createIngreso(ingreso: any) {
    return this.http.post(`${this.API_URI}/ingresos`, ingreso);
  }

  deleteItem(id: string) {
    return this.http.delete(`${this.API_URI}/ingresos/${id}`);
  }

  updateItem(id: string, ingreso: any) {
    return this.http.put(`${this.API_URI}/ingresos/${id}`, ingreso);
  }
}
