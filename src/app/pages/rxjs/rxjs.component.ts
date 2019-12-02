import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  contador: number;
  subscripcion: Subscription;

  constructor() {

   this.subscripcion = this.regresaObservable().pipe(
      retry(2)
    ).subscribe(
      numero => console.log('Next', numero),
      error => console.error('error', error),
      () => console.log('completado')
    );

  }

  ngOnInit() {
  }

  ngOnDestroy(){ 
    console.log('me voy del componente');
    this.subscripcion.unsubscribe();
  }

  regresaObservable(): Observable<any> {

      return new Observable( observer => {
        this.contador = 0;
        console.log('contador inicializado');

        let intervalo = setInterval(() => {
          this.contador += 1;

          observer.next( this.contador );

          // if(this.contador === 3) {
          //   clearInterval( intervalo );
          //   observer.complete();
          // }
  
          // if ( this.contador === 2 ){
          //   //clearInterval(intervalo);
          //   observer.error('auxilio');
          // }
  
        }, 1000);
  
      });


  }

}
