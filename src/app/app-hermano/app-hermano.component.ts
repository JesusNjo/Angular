import { Component } from '@angular/core';
import { SerivicioFamiliarService } from '../serivicio-familiar.service';

@Component({
  selector: 'app-app-hermano',
  templateUrl: './app-hermano.component.html',
  styleUrls: ['./app-hermano.component.css']
})
export class AppHermanoComponent {

  constructor(private _serivicioFamiliar: SerivicioFamiliarService){

  }

}
