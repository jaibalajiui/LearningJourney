import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentComponent} from './component/component.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  {path: 'component', component: ComponentComponent},
  {path: 'directive', component: DirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
