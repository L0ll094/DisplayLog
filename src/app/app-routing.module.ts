import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLogComponent } from './view-log/view-log.component';

const routes: Routes = [
  { path: 'viewLog', component: ViewLogComponent },
  { path: '', redirectTo: '/viewLog', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
