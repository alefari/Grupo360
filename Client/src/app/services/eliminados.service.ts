import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EliminadosService {

  API_URI = environment.dirBackend;

  constructor(private http: HttpClient) { }

  getEliminados() {
    return this.http.get(`${this.API_URI}/eliminados`);
  }

  createEliminado(eliminado: any) {
    return this.http.post(`${this.API_URI}/eliminados`, eliminado);
  }

  deleteEliminado(id: string) {
    return this.http.delete(`${this.API_URI}/eliminados/${id}`);
  }

  updateEliminado(id: string, eliminado: any) {
    return this.http.put(`${this.API_URI}/eliminados/${id}`, eliminado);
  }
}
