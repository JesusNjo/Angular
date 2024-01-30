import { Component } from '@angular/core';

@Component({
  selector: 'app-app-padre',
  templateUrl: './app-padre.component.html',
  styleUrls: ['./app-padre.component.css']
})
export class AppPadreComponent {
  tittle: string = "Angular"
  numberClick: number = 0;
  //Para enviar el mensaje al hijo
  datoEntrada: String = "-------------";

  mensaje: string = "";
  recibirMensaje($event:string){
    this.mensaje = $event;
  }

  incrementar(){
    this.numberClick++;
  }

  decrementar(): void {
    this.numberClick ===0 ? this.numberClick : this.numberClick--;
  }
}  
