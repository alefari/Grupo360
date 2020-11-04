import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  API_URI = environment.dirBackend;

  constructor(private http: HttpClient) { }

  getEstados() {
    return this.http.get(`${this.API_URI}/estados`);
  }

  getEstado(id: string) {
    return this.http.get(`${this.API_URI}/estados/${id}`);
  }

  createEstado(estado: string) {
    return this.http.post(`${this.API_URI}/estados`, estado);
  }

  deleteEstado(id: string) {
    return this.http.delete(`${this.API_URI}/estados/${id}`);
  }

  updateEstado(id: string, estado: string) {
    return this.http.put(`${this.API_URI}/estados/${id}`, estado);
  }
}
