import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-hijo',
  templateUrl: './app-hijo.component.html',
  styleUrls: ['./app-hijo.component.css']
})
export class AppHijoComponent {
  //Mensaje que recibe el hijo desde el padre
  @Input() datoEntrada:String = "";
  @Output() incrementFromSon = new EventEmitter<void>();
  @Output() decrementFromSon = new EventEmitter<void>();
  @Output() messageSon = new EventEmitter<string>();

  message:string = "";
  
  sendMessage(){
    this.messageSon.emit(this.message);
  }

  increment(){
    this.incrementFromSon.emit();
  }
  decrement(){
    this.decrementFromSon.emit();
  }
}