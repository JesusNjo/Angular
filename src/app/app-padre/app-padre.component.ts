import { Component, OnInit } from '@angular/core';
import { SerivicioFamiliarService } from '../serivicio-familiar.service';

@Component({
  selector: 'app-app-padre',
  templateUrl: './app-padre.component.html',
  styleUrls: ['./app-padre.component.css']
})
export class AppPadreComponent implements OnInit{

  constructor(private _servicioFamiliar: SerivicioFamiliarService){

  }
  hermanoMayor?:string;

  ngOnInit():void{
    this._servicioFamiliar.setHermanoMayor("Juan");
    this.hermanoMayor = this._servicioFamiliar.getHermanoMayor();
  }
 
  
  
  title: string = "Angular";
  datoPadre:String = "--------";
  //Para enviar el mensaje al hijo
  numberClick:number = 0;

  messageFromSon: string= "";

  responseMessage($event: string){
    this.messageFromSon= $event;
  }

  incrementar(){
    this.numberClick++;
  }
  decrementar(){
    this.numberClick ===0?this.numberClick:this.numberClick--;
  }

  
}  
