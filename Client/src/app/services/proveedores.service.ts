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

  getProveedorElegido(id: string) {
    return this.http.get(`${this.API_URI}/proveedores/${id}`);
  }

  createProveedor(proveedor: any) {
    let proveedorNuevo = {
      nombre: proveedor.nombre,
      id_area: +proveedor.area,
      direccion: proveedor.direccion,
      correo: proveedor.correo,
      credito: proveedor.credito,
      dias_credito: +proveedor.dias_credito,
      ciudad: proveedor.ciudad,
      telefono: proveedor.telefono,
      celular: proveedor.celular,
      contacto: proveedor.contacto,
      rif: proveedor.rif,
      descripcion: proveedor.descripcion,
      responsable: proveedor.responsable
    }

    return this.http.post(`${this.API_URI}/proveedores`, proveedorNuevo);
  }

  deleteProveedor(id: string) {
    return this.http.delete(`${this.API_URI}/proveedores/${id}`);
  }

  updateProveedor(id: string, proveedor:any) {
      let proveedorNuevo = {
        id_proveedor: id,
        nombre: proveedor.nombre,
        id_area: +proveedor.area,
        direccion: proveedor.direccion,
        credito: proveedor.credito,
        dias_credito: +proveedor.dias_credito,
        ciudad: proveedor.ciudad,
        correo: proveedor.correo,
        telefono: proveedor.telefono,
        celular: proveedor.celular,
        contacto: proveedor.contacto,
        rif: proveedor.rif,
        descripcion: proveedor.descripcion
      }
      return this.http.put(`${this.API_URI}/proveedores/${id}`, proveedorNuevo)
  }
}
