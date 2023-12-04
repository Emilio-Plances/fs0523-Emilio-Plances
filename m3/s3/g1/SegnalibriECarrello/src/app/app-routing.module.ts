import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';

const routes: Routes = [
  {
    path:``,
    title:'Products List',
    component: ProductsComponent
  },
  {
    path:`favourites`,
    title:'Favourites List',
    component: FavouritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
