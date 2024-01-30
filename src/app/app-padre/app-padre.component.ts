import { Component } from '@angular/core';
import { SerivicioFamiliarService } from '../serivicio-familiar.service';

@Component({
  selector: 'app-app-padre',
  templateUrl: './app-padre.component.html',
  styleUrls: ['./app-padre.component.css']
})
export class AppPadreComponent {

  constructor(private _serivicioFamiliar: SerivicioFamiliarService){

  }
  hermanoMayor?:string;

  ngOnInit():void{
    this._serivicioFamiliar.setHermanoMayor("Juan");
    this.hermanoMayor = this._serivicioFamiliar.getHermanoMayor();
  }

  tittle: string = "Angular";
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
