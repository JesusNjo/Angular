import { Component, OnInit } from '@angular/core';
import { SerivicioFamiliarService } from '../serivicio-familiar.service';

@Component({
  selector: 'app-app-hermano',
  templateUrl: './app-hermano.component.html',
  styleUrls: ['./app-hermano.component.css']
})
export class AppHermanoComponent implements OnInit {
  hermanoMenor?: string;
  constructor(private _serivicioFamiliar: SerivicioFamiliarService){

  }
  ngOnInit():void{
    this._serivicioFamiliar.setHermanoMenor('Pedro');
    this.hermanoMenor =this._serivicioFamiliar.getHermanoMenor();
  }

  saludar(){
    this._serivicioFamiliar.saludar(this._serivicioFamiliar.getHermanoMenor() || " ");
  }
}
