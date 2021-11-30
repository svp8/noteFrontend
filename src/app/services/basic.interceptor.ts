import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class BasicInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}
   

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (!request.url.indexOf("http://localhost:8090/user/login")){
      console.log(request.url)
      return next.handle(request);
    }
    request = request.clone({
      setHeaders: {
        Authorization: `Basic ${this.auth.getToken()}`
      }
    });
    return next.handle(request);
  }
}
