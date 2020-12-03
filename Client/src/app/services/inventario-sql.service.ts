import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Item } from '../models/item.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class InventarioSQLService {

  API_URI = environment.dirBackend;

  constructor(private http: HttpClient) { }

  getInventario() {
    return this.http.get(`${this.API_URI}/herramientas`);
  }

  getItem(id: string) {
    return this.http.get(`${this.API_URI}/herramientas/${id}`);
  }

  createItem(item: Item) {
    let nuevoItem = {
      nombre: item.nombre,
      id_categoria: +item.categoria,
      id_subcategoria: +item.subcategoria,
      cantidad: item.cantidad,
      id_unidad: +item.unidades,
      id_ubicacion: +item.ubicacion,
      id_estado: 1,
      vencimiento: item.vencimiento,
      serial: item.serial,
      precio: item.precio,
      descripcion: item.descripcion,
      cantidadObra: item.cantidadObra
    }
    return this.http.post(`${this.API_URI}/herramientas`, nuevoItem);
  }

  deleteItem(id: string) {
    return this.http.delete(`${this.API_URI}/herramientas/${id}`);
  }

  updateItem(id: string, item: any, full: boolean=true) {

    if(full){
      let nuevoItem = {
        nombre: item.nombre,
        id_categoria: +item.categoria,
        id_subcategoria: +item.subcategoria,
        cantidad: item.cantidad,
        id_unidad: +item.unidades,
        id_ubicacion: +item.ubicacion,
        id_estado: +item.estado,
        vencimiento: item.vencimiento,
        serial: item.serial,
        precio: item.precio,
        descripcion: item.descripcion,
        cantidadObra: item.cantidadObra
      }
      return this.http.put(`${this.API_URI}/herramientas/${id}`, nuevoItem);
    }
    else {
      return this.http.put(`${this.API_URI}/herramientas/${id}`, item);
    }

  }


}
