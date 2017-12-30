import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('container') nav;

  constructor(){}
  
  ngOnInit(){
  //   $("#menu-toggle").click( function (e){
  //     e.preventDefault();
  //     $(NavComponent).setAttribute("style", "height: 0vh");
  //   });
  // }

  // ngAfterViewInit(){
  //   let element = this.nav.nativeElement;
  //   element.setAttribute("style", "background-color:red");
  // }
}
