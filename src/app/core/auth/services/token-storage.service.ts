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
    localStorage.removeItem('userName')
  }



  public get userName() : string{
    return localStorage.getItem('userName') as string
  }
  public set userName(user_name : string){
    localStorage.setItem('userName', user_name)
  }


}
