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

  ngOnInit(){
    // -------------------------- Hamburger Animation Scripts -------------------------------------
    (function() {

      "use strict";
      
      var toggles = document.querySelectorAll(".c-hamburger");
      
      for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
      };
      
      function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
      }
      
      })();
  }
  ngAfterViewInit(){
    let element = this.nav.nativeElement;
    element.setAttribute("style", "background-color: salmon");
  }
}