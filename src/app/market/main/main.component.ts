import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountFacadeService } from 'src/app/core/auth/services/account-facade.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  
  userName  = localStorage.getItem("userName")

}
