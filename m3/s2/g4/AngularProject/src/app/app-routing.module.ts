import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActiveElementComponent } from './pages/active-element/active-element.component';
import { InactiveElementComponent } from './pages/inactive-element/inactive-element.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path:'',
    title:'Home',
    component: HomeComponent
  },
  {
    path:'active',
    title:'Active Elements',
    component: ActiveElementComponent,

    children:  [{
      path:'details/:id',
      title:'Details Element',
      component: DetailsComponent
    }]

  },
  {
    path:'inactive',
    title:'Inactive Elements',
    component: InactiveElementComponent,

    children:  [{
      path:'details/:id',
      title:'Details Element',
      component: DetailsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
