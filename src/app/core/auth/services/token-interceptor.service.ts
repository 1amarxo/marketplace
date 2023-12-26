import { Injectable, inject } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  

  constructor(private token_storage : TokenStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestWithToken = this.addAccessToken(request);
    return next.handle(requestWithToken);
  }

  addAccessToken(request: HttpRequest<any>) : HttpRequest<any> {
    if (this.token_storage.accessToken)
      return request.clone({setHeaders: { 'Authorization': `Bearer ${this.token_storage.accessToken}` }});
    else
      return request;
  }
}
