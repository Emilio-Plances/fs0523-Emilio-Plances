import { Component } from '@angular/core';
import { IRegister } from '../Modules/iregister';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerData:IRegister={
    name: '',
    username: '',
    email: '',
    password: ''
  }
  constructor(
    private authSVC:AuthService,
    private router:Router
  ){}

  register(){
    this.authSVC.register(this.registerData).subscribe(data=>{console.log(data);
    this.router.navigate(['loginSystem/login'])})
  }
}
