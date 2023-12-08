import { Component } from '@angular/core';
import { LogSystemService } from './services/log-system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProgettoAngular';
  logged:boolean=false
  constructor(
    private LSS:LogSystemService
  ){}

  ngOnInit(){
    this.LSS.booleanUser$.subscribe(user =>this.logged = user)
  }

  logOut(){
    this.LSS.logOut();
  }
}
