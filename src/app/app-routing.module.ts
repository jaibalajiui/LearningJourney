import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentComponent} from './component/component.component';

const routes: Routes = [
  {path:'component', component:ComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
