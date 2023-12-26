import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAccountComponent } from '../header-account/header-account.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,HeaderAccountComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  onClick(){

  }
}
