import { Component } from '@angular/core';
import { ILogin } from '../Modules/ilogin';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData:ILogin={
    email: '',
    password: ''
  }

  constructor(private authSVC:AuthService){}

  login(){
    this.authSVC.login(this.loginData).subscribe(data=> console.log(data));
  }
}
