import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { WebDesignComponent } from './components/pages/web/web.component';
import { GraphicDesignComponent } from './components/pages/graphic/graphic.component';

import { IrisComponent } from './components/pages/graphic/items/iris/iris.component';
import { DaycareComponent } from './components/pages/graphic/items/daycare/daycare.component';
import { RosalesComponent } from './components/pages/graphic/items/rosales/rosales.component';
import { PulitoComponent } from './components/pages/graphic/items/pulito/pulito.component';
import { Shift3Component } from './components/pages/graphic/items/shift3/shift3.component';
import { ArComponent } from './components/pages/graphic/items/ar/ar.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'web-design', component: WebDesignComponent },
  { path: 'graphic-design', component: GraphicDesignComponent },
  { path: "iris", component: IrisComponent },
  { path: "ramirez-daycare", component: DaycareComponent },
  { path: "rosales-winery", component: RosalesComponent },
  { path: "pulito", component: PulitoComponent },
  { path: "shift3", component: Shift3Component },
  { path: "ar", component: ArComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    AboutComponent,
    ContactComponent,
    WebDesignComponent,
    GraphicDesignComponent,
    IrisComponent,
    DaycareComponent,
    RosalesComponent,
    PulitoComponent,
    Shift3Component,
    ArComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
