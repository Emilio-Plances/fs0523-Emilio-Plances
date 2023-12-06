import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FormAngular';
  logged!:boolean
  constructor(private authSVC: AuthService){}

  ngOnInit(){
    this.authSVC.userBoolean$.subscribe(boolean=>this.logged=boolean)
  }

  logOut(){
    this.authSVC.logOut();
  }
}
