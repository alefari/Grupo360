import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosProveedoresService {

  API_URI = environment.dirBackend;

  constructor(private http: HttpClient) { }

  getProductosProveedores() {
    return this.http.get(`${this.API_URI}/productosProveedores`);
  }

  // getProductoProveedor(id: string) {
  //return this.http.get(`${this.API_URI}/productosProveedores/${id}`);
  //}

  createProductoProveedor(producto: any) {
    let productoProveedorNuevo = {
      nombre: producto.nombre,
      id_area_producto: +producto.area,
      id_unidad_producto: +producto.unidad,
      id_proveedor_producto: +producto.proveedor,
      fecha_act: new Date().toISOString().slice(0, 19).replace('T', ' '),
      precio: producto.precio,
    }
    console.log(productoProveedorNuevo);

    return this.http.post(`${this.API_URI}/productosProveedores`, productoProveedorNuevo);
  }

  deleteProductoProveedor(id: string) {
    return this.http.delete(`${this.API_URI}/productosProveedores/${id}`);
  }

  updateProductoProveedor(id: string, producto:any) {
    let productoProveedorNuevo = {
      nombre: producto.nombre,
      id_area_producto: +producto.area,
      id_unidad_producto: +producto.unidad,
      id_proveedor_producto: +producto.proveedor,
      fecha_act: producto.fecha,
      precio: producto.precio,
      }
      return this.http.put(`${this.API_URI}/productosProveedores/${id}`, productoProveedorNuevo)
  }
}
