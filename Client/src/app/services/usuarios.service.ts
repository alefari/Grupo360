import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URI = environment.dirBackend;

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${this.API_URI}/empleados`);
  }

  getUsuario(id: string) {
    return this.http.get(`${this.API_URI}/empleados/${id}`);
  }

  // createUsuario(categoria: any) {
  //   return this.http.post(`${this.API_URI}/ubicaciones`, categoria);
  // }

  // deleteUbicacion(id: string) {
  //   return this.http.delete(`${this.API_URI}/ubicaciones/${id}`);
  // }

  updateUsuario(id: string, usuario: string) {
    return this.http.put(`${this.API_URI}/empleados/${id}`, usuario);
  }
}
