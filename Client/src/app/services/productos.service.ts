import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI = environment.dirBackend;

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(`${this.API_URI}/productos`);
  }

  getProducto(id: string) {
    return this.http.get(`${this.API_URI}/productos/${id}`);
  }

  createProducto(producto: any) {
    let productoNuevo = {
      nombre: producto.nombre,
      id_unidad: +producto.unidad,
    }
    return this.http.post(`${this.API_URI}/productos`, productoNuevo);
  }

  deleteProducto(id: string) {
    return this.http.delete(`${this.API_URI}/productos/${id}`);
  }

  updateProducto(id: string, producto: any) {
    let productoModificar = {
      nombre: producto.nombre,
      id_unidad: +producto.unidad,
      }
    return this.http.put(`${this.API_URI}/productos/${id}`, productoModificar);
  }
}
