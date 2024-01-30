import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerivicioFamiliarService {



  hermanoMayor?:string;
  hermanoMenor?: string;

  getHermanoMayor():string{
    return this.hermanoMayor || '';
  }
  setHermanoMayor(hermano:string){
    this.hermanoMayor = hermano;
  }
  
  getHermanoMenor():string{
    return this.hermanoMenor || '';
  }
  setHermanoMenor(hermano:string){
    this.hermanoMenor = hermano;
  }

  saludar(hermano:string){
    console.log(`Hola ${hermano}`);
  }

  preguntarPorHijo():string{
    return "¿Como está tu hijo?";
  }

  constructor() { }
}
