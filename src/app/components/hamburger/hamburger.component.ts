import { Component, OnInit } from '@angular/core';
import { NavComponent } from './../nav/nav.component';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

declare var $: any;

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit{

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
    
}