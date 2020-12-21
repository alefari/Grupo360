import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URI = environment.dirBackend;

  user = new Subject<User>();

  constructor(private http: HttpClient) { }

  signIn(cedula: number, password: string) {
    return this.http.post(`${this.API_URI}/auth/signin`,
      {
        cedula: cedula,
        password: password
      }
    )
  }
}
