import { Component } from '@angular/core';
import { IRegister } from '../../../Modules/iregister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerData:IRegister={
    name: '',
    surname: '',
    email: '',
    password: ''
  }

  register(){

  }
}
