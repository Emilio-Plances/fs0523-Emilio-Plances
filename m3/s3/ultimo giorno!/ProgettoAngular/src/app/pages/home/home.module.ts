import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WeatherBlocksComponent } from './components/weather-blocks/weather-blocks.component';
import { InfoCityComponent } from './components/info-city/info-city.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [
    HomeComponent,
    WeatherBlocksComponent,
    InfoCityComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ]
})
export class HomeModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(far,fas)
  }
}
