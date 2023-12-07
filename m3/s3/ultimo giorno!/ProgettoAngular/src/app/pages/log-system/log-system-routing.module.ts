import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogSystemComponent } from './log-system.component';

const routes: Routes = [{ path: '', component: LogSystemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogSystemRoutingModule { }
