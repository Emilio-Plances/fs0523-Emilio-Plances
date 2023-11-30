import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveElementComponent } from './pages/active-element/active-element.component';
import { InactiveElementComponent } from './pages/inactive-element/inactive-element.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    ActiveElementComponent,
    InactiveElementComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
