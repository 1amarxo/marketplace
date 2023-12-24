import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountCredential } from '../model/account.credential';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AccountFacadeService } from '../services/account-facade.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loginForm : FormGroup

  constructor(private accountFacade: AccountFacadeService, private router: Router){
    this.loginForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      password: new FormControl(null , [Validators.required]),
      email: new FormControl(null , [Validators.required,Validators.email])
    })
  }

  onSubmit(){
    this.accountFacade.regisration(this.loginForm.value as AccountCredential)
    this.router.navigate(["/main"])
  }

}
