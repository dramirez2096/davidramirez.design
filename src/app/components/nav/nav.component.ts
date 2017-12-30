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
      if (element.style.height = "0vh"){
        element.setAttribute("style", "height: 100vh")
        console.log('if works')
      } 
      else if (element.style.height = "100vh") {
        element.setAttribute("style", "height: 0vh")
        console.log('else works')
      }
    };
  }
