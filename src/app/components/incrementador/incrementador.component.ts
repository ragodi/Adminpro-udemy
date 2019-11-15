import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgreso', {static: false}) txtProgreso: ElementRef;
  
  @Input() percentProgress = 50;

  @Input() leyenda = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeProgress(valor: number) {

    if (this.percentProgress + valor >= 100) {
      this.percentProgress = 100;
    } else {
      if (this.percentProgress + valor <= 0) {
        this.percentProgress = 0;
      } else {
        this.percentProgress += valor;
        this.cambioValor.emit(this.percentProgress);
      }
    }
    this.txtProgreso.nativeElement.focus();
  }

  cambio( nuevoValor: number ) {
    
    // let elementHtml: any = document.getElementsByName('progreso')[0];
    
    

    if (nuevoValor >= 100) {
      this.percentProgress = 100;
    } else {
      if (nuevoValor <= 0) {
        this.percentProgress = 0;
      } else {
        if (nuevoValor == null) {
            this.percentProgress = 0;
        } else {

        this.percentProgress = nuevoValor;
        }
      }
    }
    
    // elementHtml.value = this.percentProgress;

    this.txtProgreso.nativeElement.value = this.percentProgress;
    this.cambioValor.emit(this.percentProgress);

    
    
  }

}
