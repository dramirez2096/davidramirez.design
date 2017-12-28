import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HamburgerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
