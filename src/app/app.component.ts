import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){}
  
  ngOnInit(){
  
  }
}
