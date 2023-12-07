import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogSystemRoutingModule } from './log-system-routing.module';
import { LogSystemComponent } from './log-system.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LogSystemComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LogSystemRoutingModule
  ]
})
export class LogSystemModule { }
