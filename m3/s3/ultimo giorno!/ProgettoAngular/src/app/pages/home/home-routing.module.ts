import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LogGuard } from '../log-system/log.guard';

const routes: Routes = [{
   path: '',
   component: HomeComponent,
   canActivate: [LogGuard]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
