import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountFacadeService } from 'src/app/core/auth/services/account-facade.service';

@Component({
  selector: 'app-header-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-account.component.html',
  styleUrls: ['./header-account.component.scss']
})
export class HeaderAccountComponent implements OnInit{
  public username: any
  constructor(public accountFacade : AccountFacadeService){

  }
  ngOnInit(): void {
    this.username = localStorage.getItem("userName")
  }
  logout(){   
    this.accountFacade.logout()
  }
}
