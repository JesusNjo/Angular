import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-hijo',
  templateUrl: './app-hijo.component.html',
  styleUrls: ['./app-hijo.component.css']
})
export class AppHijoComponent {
  //Mensaje que recibe el hijo desde el padre
  @Input() datoPadre: String = "";
  @Output() messageToSend = new EventEmitter<string>();
  @Output() incrementarFromSon = new EventEmitter<void>();
  @Output() decrementarFromSon = new EventEmitter<void>();
  messageToFather: string ="";
  numerTo:number= 0;

  sendMessage(){
    this.messageToSend.emit(this.messageToFather);
  }
 
  incrementar(){
    this.incrementarFromSon.emit();
  };
  decrementar(){
    this.decrementarFromSon.emit();
  };

}