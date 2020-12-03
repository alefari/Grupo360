import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalidadesService {

  API_URI = environment.dirBackend;

  constructor(private http: HttpClient) { }

  getModalidades() {
    return this.http.get(`${this.API_URI}/modalidades`);
  }

  getModadlidad(id: string) {
    return this.http.get(`${this.API_URI}/modalidades/${id}`);
  }

  createModalidad(modalidad: string) {
    return this.http.post(`${this.API_URI}/modalidades`, modalidad);
  }

  deleteModalidad(id: string) {
    return this.http.delete(`${this.API_URI}/modalidades/${id}`);
  }

  updateModalidad(id: string, modalidad: string) {
    return this.http.put(`${this.API_URI}/modalidades/${id}`, modalidad);
  }
}
