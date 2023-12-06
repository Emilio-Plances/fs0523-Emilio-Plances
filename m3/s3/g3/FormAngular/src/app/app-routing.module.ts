import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSystemGuard } from './pages/login-system/auth-system.guard';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home'},
  {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'loginSystem', loadChildren: () => import('./pages/login-system/login-system.module').then(m => m.LoginSystemModule)},
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthSystemGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
