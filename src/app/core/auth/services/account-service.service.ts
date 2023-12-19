import { Injectable, createPlatform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountCredential } from '../model/account.credential';
import { AuthResponse } from '../model/auth.response';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  private apiUrl = "https://x8ki-letl-twmt.n7.xano.io/api:P_BD4J01/auth"
  constructor(private _httpClient : HttpClient) { }

  login(user: AccountCredential){
    return this._httpClient.post<AuthResponse>(this.apiUrl+'/login',user) 
  }

  regisration (user: AccountCredential) { 
    console.log(user)
    this._httpClient.post<AuthResponse>(this.apiUrl+"/signup",user).subscribe((data) => {
      console.log(data)
    })
  }
}
