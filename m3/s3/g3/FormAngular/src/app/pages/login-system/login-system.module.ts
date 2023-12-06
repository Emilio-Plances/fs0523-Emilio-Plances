import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginSystemRoutingModule } from './login-system-routing.module';
import { LoginSystemComponent } from './login-system.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginSystemComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginSystemRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class LoginSystemModule { }
