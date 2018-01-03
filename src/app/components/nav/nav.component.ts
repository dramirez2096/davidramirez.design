import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @ViewChild('container') nav;
  @ViewChild('logoArea') logo;
  @ViewChild('linksArea') links;
  @ViewChild('hamburger') hamburger;
  @ViewChild('socialArea') social;

  constructor(){}

  ngOnInit(){
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
  
  

    menuToggle(){
      let background = this.nav.nativeElement;
      let logoArea = this.logo.nativeElement;
      let linksArea = this.links.nativeElement;
      let socialArea = this.social.nativeElement;

      if(background.style.height != '100vh'){
        background.style.height = "100vh"
        logoArea.style.visibility = "visible"
        logoArea.style.opacity = "1"
        linksArea.style.visibility = "visible"
        linksArea.style.opacity = "1"
        socialArea.style.visibility = "visible"
        socialArea.style.opacity = "1"
      }
      else {
        background.style.height = "0vh"
        logoArea.style.visibility = "hidden"
        logoArea.style.opacity = "0"
        linksArea.style.visibility = "hidden"
        linksArea.style.opacity = "0"
        socialArea.style.visibility = "hidden"
        socialArea.style.opacity = "0"
      }
      }

      linksToggle(){
        let background = this.nav.nativeElement;
        let logoArea = this.logo.nativeElement;
        let linksArea = this.links.nativeElement;
        let hm = this.hamburger.nativeElement;
        let socialArea = this.social.nativeElement;

        background.style.height = "0vh"
        logoArea.style.visibility = "hidden"
        logoArea.style.opacity = "0"
        linksArea.style.visibility = "hidden"
        linksArea.style.opacity = "0"
        socialArea.style.visibility = "hidden"
        socialArea.style.opacity = "0"

        hm.classList.remove("is-active")

        
      }
    }
