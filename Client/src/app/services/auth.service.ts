import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { BehaviorSubject} from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../auth/user.model';
import { Router } from '@angular/router';

interface AuthResponseData {
  token: string,
  cedula: number,
  expiresIn: number
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  API_URI = environment.dirBackend;

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) { }

  signIn(cedula: number, password: string) {
    return this.http.post<AuthResponseData>(`${this.API_URI}/auth/signin`, { cedula: cedula, password: password })
    .pipe(
      tap(resData => {
        const expirationDate = new Date(new Date().getTime() + +resData['expiresIn'] * 1000);
        const user = new User(
          resData.cedula,
          resData.token,
          expirationDate
        );
        this.user.next(user);
      })
    )
  }

  signUp() {

  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
  }

}
