import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountFacadeService } from '../services/account-facade.service';
import { Router } from '@angular/router';
import { AccountCredential } from '../model/account.credential';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm : FormGroup

  constructor(private accountFacade: AccountFacadeService, private router: Router){
    this.loginForm = new FormGroup({
      password: new FormControl(null , [Validators.required]),
      email: new FormControl(null , [Validators.required,Validators.email])
    })
  }

  onSubmit(){
    this.accountFacade.login(this.loginForm.value as AccountCredential)
    this.router.navigate(["/main"])
  }
}
