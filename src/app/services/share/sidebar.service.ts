import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  menus: any[] = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenus: [
        { titulo: 'Dashboard', url: '/dashboard'},
        { titulo: 'ProgressBar', url: '/progress'},
        { titulo: 'Gráficas', url: '/graficas1'},
      ]
    }
  ];
  constructor() { }
}
