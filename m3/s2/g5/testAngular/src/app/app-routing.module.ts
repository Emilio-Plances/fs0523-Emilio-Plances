import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompletedComponent } from './pages/completed/completed.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: '/incomplete',
  },
  {
    path:"incomplete",
    title:"To Do List",
    component: HomeComponent
  },
  {
    path:"completed",
    title:"Completed To Do",
    component: CompletedComponent
  }
  // {
  //   path:"**",
  //   title:"page404",

  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
