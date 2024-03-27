import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges {

   formGroup: FormGroup;

  @Input() dniType?:string;
  newChanges?:string;
  theresChanges?:boolean;


  constructor(forms:FormBuilder){
    this.formGroup = forms.group({
      dni: ['', [Validators.required, Validators.minLength(5), this.validRegex()]],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes?.['dniType'].currentValue);
    this.newChanges = changes?.['dniType'].currentValue != '' ? changes?.['dniType'].currentValue : 'DNI';


  }

  hasErrors(typeError:string){
    return this.formGroup.get('dni')?.hasError(typeError) && this.formGroup.get('dni')?.touched;
  }

  validRegex= ():ValidatorFn =>{
    return (control)=>{
      const dni = control.value as string;
      const regex = /^(?=.*[a-z])(?=.*[A-Z])/;
      if(!regex.test(dni)){
        return {'invalidDni': true}
      }
      return null;
    }
  }
  
  
}
