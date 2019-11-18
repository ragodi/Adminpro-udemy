import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default.css'
  };

  constructor() { 
    this.cargarAjustes();
  }

  guardarAjustes(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes(){
    if ( localStorage.getItem('ajustes')) {

      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));

    }
    document.getElementById('tema').setAttribute('href', this.ajustes.temaUrl);

    let check: any = document.getElementsByClassName('working');

    
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
