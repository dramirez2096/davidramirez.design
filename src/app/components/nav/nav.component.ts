import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HamburgerComponent } from '../hamburger/hamburger.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @ViewChild('container') nav;
  @ViewChild('logoArea') logo;
  @ViewChild('linksArea') links;

  constructor(){}

  ngOnInit(){}
  

    menuToggle(){
      let background = this.nav.nativeElement;
      let logoArea = this.logo.nativeElement;
      let linksArea = this.links.nativeElement;

      if(background.style.height != '100vh'){
        background.style.height = "100vh"
        logoArea.style.visibility = "visible"
        logoArea.style.opacity = "1"
        linksArea.style.visibility = "visible"
        linksArea.style.opacity = "1"
      }
      else {
        background.style.height = "0vh"
        logoArea.style.visibility = "hidden"
        logoArea.style.opacity = "0"
        linksArea.style.visibility = "hidden"
        linksArea.style.opacity = "0"
      }
      }
      linksToggle(){
        let background = this.nav.nativeElement;
        let logoArea = this.logo.nativeElement;
        let linksArea = this.links.nativeElement;

        background.style.height = "0vh"
        logoArea.style.visibility = "hidden"
        logoArea.style.opacity = "0"
        linksArea.style.visibility = "hidden"
        linksArea.style.opacity = "0"
      }
    }
