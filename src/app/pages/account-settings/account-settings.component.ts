import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _SS: SettingsService) { }

  ngOnInit() {
  }

  cambiarColor(tema: string) {
    
    
    const url = `assets/css/colors/${tema}.css`;
    this._SS.ajustes.tema = tema;
    this._SS.ajustes.temaUrl = url;
    
    document.getElementById('tema').setAttribute('href', url);

    this._SS.guardarAjustes();

  }

}
