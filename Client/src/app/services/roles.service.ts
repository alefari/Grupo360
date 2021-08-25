import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  API_URI = environment.dirBackend;

  getRoles() {
    return this.http.get(`${this.API_URI}/roles`);
  }
}
