import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogGuard } from './pages/log-system/log.guard';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'Home'
  },
  {
    path: 'LogSystem',
    loadChildren: () => import('./pages/log-system/log-system.module').then(m => m.LogSystemModule)
  },
  {
    path: 'Home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [LogGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
