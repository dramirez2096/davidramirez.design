import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HamburgerComponent } from '../hamburger/hamburger.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @ViewChild('container') nav;

  constructor(){}

  ngOnInit(){}

    menuToggle(){
      let element = this.nav.nativeElement;
      if(element.style.height != '100vh'){
        element.setAttribute("style", "height: 100vh")
      }
      else {
        element.setAttribute("style", "height: 0vh")
      }
      }
    }
