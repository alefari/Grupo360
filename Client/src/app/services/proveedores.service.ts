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
    return this.http.post(`${this.API_URI}/proveedores`, proveedor);
  }

  deleteProveedor(id: string) {
    return this.http.delete(`${this.API_URI}/proveedores/${id}`);
  }

  //updateProveedor(id: string) {
  //return this.http.put(`${this.API_URI}/proveedores/${id}`);
  //}

}
