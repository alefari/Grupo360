import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  API_URI = environment.dirBackend;

  constructor(private http: HttpClient) { }

  getProveedores() {
    return this.http.get(`${this.API_URI}/proveedores`);
  }

  // getProveedor(id: string) {
  //return this.http.get(`${this.API_URI}/proveedores/${id}`);
  //}

  createProveedor(proveedor: any) {
    let proveedorNuevo = {
      nombre: proveedor.nombre,
      id_area: +proveedor.area,
      direccion: proveedor.direccion,
      correo: proveedor.correo,
      telefono: proveedor.telefono,
      contacto: proveedor.contacto,
      rif: proveedor.rif,
      descripcion: proveedor.descripcion
    }

    return this.http.post(`${this.API_URI}/proveedores`, proveedorNuevo);
  }

  deleteProveedor(id: string) {
    return this.http.delete(`${this.API_URI}/proveedores/${id}`);
  }

  updateProveedor(id: string, proveedor:any) {
      let proveedorNuevo = {
        nombre: proveedor.nombre,
        id_area: +proveedor.area,
        direccion: proveedor.direccion,
        correo: proveedor.correo,
        telefono: proveedor.telefono,
        contacto: proveedor.contacto,
        rif: proveedor.rif,
        descripcion: proveedor.descripcion
      }
      return this.http.put(`${this.API_URI}/herramientas/${id}`, proveedorNuevo)
  }
}
