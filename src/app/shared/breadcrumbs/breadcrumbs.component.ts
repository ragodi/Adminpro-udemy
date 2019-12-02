import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';



@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  tituloPagina: string;
  constructor( private router: Router,
               private title: Title,
               private meta: Meta ) {

    this.getDataRoute().subscribe( data => {
  

      // cambiar el title de la página en la que estamos navegando
      this.tituloPagina = data.titulo;
      title.setTitle(data.titulo);
      
      // actualizar un meta tag
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.tituloPagina
      };

      this.meta.updateTag( metaTag );

    });
  }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map((data: ActivationEnd) => data.snapshot.data)
    );
  }

}
