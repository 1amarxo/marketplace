import { Injectable, createPlatform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountCredential } from '../model/account.credential';
import { AuthResponse } from '../model/auth.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  private apiUrl = "https://x8ki-letl-twmt.n7.xano.io/api:P_BD4J01/auth"
  constructor(private _httpClient : HttpClient) { }

  login(user: AccountCredential){
    return this._httpClient.post<AuthResponse>(this.apiUrl + '/login', user).toPromise() as Promise<AuthResponse>
  }

  regisration (user: AccountCredential) { 
 
    return this._httpClient.post<AuthResponse>(this.apiUrl+"/signup",user).toPromise() as Promise<AuthResponse>
  }
}
