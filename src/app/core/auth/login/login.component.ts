import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountServiceService } from '../services/account-service.service';
import { AccountCredential } from '../model/account.credential';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm : FormGroup

  constructor(private _accountService: AccountServiceService, private router: Router){
    this.loginForm = new FormGroup({
      email: new FormControl(null , [Validators.required,Validators.email]),
      password: new FormControl(null , [Validators.required]),
    })
}

onSubmit(){
  this._accountService.login(this.loginForm.value as AccountCredential)
  this.router.navigate(["/main"])
  }
}
