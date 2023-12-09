import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WeatherBlocksComponent } from './components/weather-blocks/weather-blocks.component';
import { InfoCityComponent } from './components/info-city/info-city.component';


@NgModule({
  declarations: [
    HomeComponent,
    WeatherBlocksComponent,
    InfoCityComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
