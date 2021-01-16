import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  API_URI = environment.dirBackend;

  constructor(private http: HttpClient) { }

  getAreas() {
    return this.http.get(`${this.API_URI}/areas`);
  }

  getArea(id: string) {
    return this.http.get(`${this.API_URI}/areas/${id}`);
  }

  createAreas(area: any) {
    return this.http.post(`${this.API_URI}/areas`, area);
  }

  deleteArea(id: string) {
    return this.http.delete(`${this.API_URI}/areas/${id}`);
  }

  updateArea(id: string, area: string) {
    return this.http.put(`${this.API_URI}/areas/${id}`, area);
  }
}
