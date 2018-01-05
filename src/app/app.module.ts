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


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'web-design', component: WebDesignComponent },
  { path: 'graphic-design', component: GraphicDesignComponent }
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
