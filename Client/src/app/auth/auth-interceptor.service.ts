import { Injectable } from "@angular/core";
import { HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { AuthService } from "./auth.service";
import { exhaustMap, take } from 'rxjs/operators';

@Injectable()

export class AuthInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.auth.user.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          headers: new HttpHeaders().set('x-access-token', user.token)
        })
        return next.handle(modifiedReq);
      })
    )
  }

}
