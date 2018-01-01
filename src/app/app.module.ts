import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { AboutComponent } from './components/pages/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HamburgerComponent,
    LandingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
