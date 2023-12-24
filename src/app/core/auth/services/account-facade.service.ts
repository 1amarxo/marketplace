import { Injectable } from '@angular/core';
import { AccountApiService } from './account-service.service';
import { TokenStorageService } from './token-storage.service';
import { AccountCredential } from '../model/account.credential';

@Injectable({
  providedIn: 'root'
})
export class AccountFacadeService {

  constructor(private _accountService: AccountApiService, private tokenStorage: TokenStorageService) { }



  isAuthenticated(): Boolean {
    if(this.tokenStorage.accessToken ) {
      return true;
    }
    else{
      return false;
    }
  }
  
  
  async regisration(user: AccountCredential) {
    let token =  await this._accountService.regisration(user);
     this.tokenStorage.accessToken = token.authToken;
  }

   async login(user: AccountCredential) {
     let token = await this._accountService.login(user) ;

      this.tokenStorage.accessToken = token.authToken;
      this.tokenStorage.userName = token.user.name;
   }

   logout() {
     this.tokenStorage.removeToken();
   }
}
