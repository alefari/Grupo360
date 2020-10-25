import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Item } from '../models/item.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventarioSQLService {

  API_URI = environment.dirBackend;

  constructor(private http: HttpClient) {

  }

  getInventario() {
    return this.http.get(`${this.API_URI}/herramientas`);
  }

  getItem(id: string) {
    return this.http.get(`${this.API_URI}/herramientas/${id}`);
  }

  createItem(item: Item) {
    return this.http.post(`${this.API_URI}/herramientas`, item);
  }

  deleteItem(id: string) {
    return this.http.delete(`${this.API_URI}/herramientas/${id}`);
  }

  updateItem(id: string, item: Item) {
    return this.http.put(`${this.API_URI}/herramientas/${id}`, item);
  }


}
