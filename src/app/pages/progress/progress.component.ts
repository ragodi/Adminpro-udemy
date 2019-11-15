import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  
  public percentProgress1= 20;
  public percentProgress2 = 30;

  constructor() { }

  ngOnInit() {
  }

  actualizarProgress( evento: number ){
    
  }

}
