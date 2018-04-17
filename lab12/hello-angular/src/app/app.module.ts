import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TwoComponent } from './two.component';
import { ThreeComponent } from './three/three.component';


@NgModule({
  declarations: [
    AppComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
