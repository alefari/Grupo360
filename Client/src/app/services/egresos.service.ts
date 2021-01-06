import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  API_URI = environment.dirBackend;

  constructor(private http: HttpClient) { }

  getEgresos() {
    return this.http.get(`${this.API_URI}/egresos`);
  }

  // getItem(id: string) {
  //   return this.http.get(`${this.API_URI}/herramientas/${id}`);
  // }

  createEgreso(egreso: any) {
    return this.http.post(`${this.API_URI}/egresos`, egreso);
  }

  deleteEgreso(id: string) {
    return this.http.delete(`${this.API_URI}/egresos/${id}`);
  }

  updateEgreso(id: string, egreso: any) {
    return this.http.put(`${this.API_URI}/egresos/${id}`, egreso);
  }
}
