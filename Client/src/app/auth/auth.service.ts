import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { BehaviorSubject, throwError} from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router';

interface AuthResponseData {
  token: string,
  cedula: number,
  expiresIn: number,
  roles: number[]
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  API_URI = environment.dirBackend;

  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) { }

  signIn(cedula: number, password: string) {
    return this.http.post<AuthResponseData>(`${this.API_URI}/auth/signin`, { cedula: cedula, password: password })
    .pipe(
      tap(resData => {
        const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
        const user = new User(
          resData.cedula,
          resData.token,
          expirationDate,
          resData.roles
        );
        this.user.next(user);
        this.autoLogout(+resData.expiresIn * 1000)
        localStorage.setItem('userData', JSON.stringify(user));
        this.router.navigate(['/menu']);
      })
    )
  }

  signUp() {

  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
    if(this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  autoLogin() {
    const userData: {
      cedula: number,
      _token: string,
      _tokenExpirationDate: string,
      roles: number[]
    } = JSON.parse(localStorage.getItem('userData'));

    if(!userData) {
      return;
    }

    const loadedUser = new User(
      userData.cedula,
      userData._token,
      new Date(userData._tokenExpirationDate),
      userData.roles
    );

    if(loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  changePassword(cedula: number, newPass: string) {
    return this.http.put(`${this.API_URI}/auth/changePassword`, { cedula: cedula, password: newPass });
  }

  hasPermission(roles: number[]): boolean {
    console.log(this.user.value.roles)
    let hasPermission = false;
    roles.forEach(rol => {
      if(this.user.value.roles.includes(rol)) {
        console.log('dentro', rol)
        return hasPermission = true;
      }
    });
    return hasPermission;
  }
}
