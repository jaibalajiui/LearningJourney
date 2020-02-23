import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { Subcomp1Component } from './component/subcomp1/subcomp1.component';
import { Subcomp2Component } from './component/subcomp2/subcomp2.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    Subcomp1Component,
    Subcomp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
