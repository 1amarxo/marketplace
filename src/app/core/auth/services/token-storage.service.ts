import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public get accessToken() : string{
    return localStorage.getItem('token') as string
  }
  public set accessToken(token : string){
    localStorage.setItem('token', token)
  }
  public removeToken(){
    localStorage.removeItem('token')
  }



  public get userName() : string{
    return localStorage.getItem('user_name') as string
  }
  public set userName(user_name : string){
    localStorage.setItem('user_name', user_name)
  }


}
