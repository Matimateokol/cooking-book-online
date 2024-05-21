import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

@Injectable()
export class BasicAuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    if (token) {
      const authReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}

