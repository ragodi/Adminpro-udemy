import { Component, OnInit } from '@angular/core';


declare function cargar_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})



export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

cargar_plugins();

  }

}
