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

  getProductosProveedoresElegido(id_Proveedor:string) {
    return this.http.get(`${this.API_URI}/productosProveedores/${id_Proveedor}`);
  }

  createProductoProveedor(producto: any) {
    let productoProveedorNuevo = {
      nombre: producto.nombre,
      id_area_producto: +producto.area,
      id_unidad_producto: +producto.unidad,
      garantia: producto.garantia,
      dias_garantia: +producto.dias_garantia,
      id_proveedor_producto: +producto.proveedor,
      fecha_act: new Date().toISOString().slice(0, 19).replace('T', ' '),
      precio: producto.precio,
    }

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
      garantia: producto.garantia,
      dias_garantia: +producto.dias_garantia,
      id_proveedor_producto: +producto.nombreProveedor,
      precio: producto.precio,
      }
      return this.http.put(`${this.API_URI}/productosProveedores/${id}`, productoProveedorNuevo)
  }

  updatePrecioProducto(id: string, precioAct:number) {
    let productoPrecioNuevo = {
      precio: precioAct,
      }
      console.log(productoPrecioNuevo)
      return this.http.put(`${this.API_URI}/productosProveedores/${id}`, productoPrecioNuevo)
  }
}
