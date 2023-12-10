import { Component } from '@angular/core';
import { LogSystemService } from '../../services/log-system.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  logged:boolean=false
  constructor(
    private LSS:LogSystemService
  ){}
    show:boolean=false;
  ngOnInit(){
    this.LSS.booleanUser$.subscribe(user =>this.logged = user)
  }

  logOut(){
    this.LSS.logOut();
  }
}
