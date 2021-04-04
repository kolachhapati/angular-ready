import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export default class TokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    return next.handle(request);
  }
}