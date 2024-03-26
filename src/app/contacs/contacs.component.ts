import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacs',
  templateUrl: './contacs.component.html',
  styleUrls: ['./contacs.component.css']
})
export class ContacsComponent {

  formGroup: FormGroup;


  constructor(forms:FormBuilder){
    this.formGroup = forms.group({
      name: ['', [Validators.required, Validators.minLength(5), this.validRegex()]],
      email: ['', [Validators.required, Validators.email, this.validToCom()]]
    })
  }

  enviar(){
    console.log(this.formGroup.value);
    console.log(this.formGroup.status);
  }
  validToCom():ValidatorFn{
    return (control) =>{
      const email = control.value as string;
      return !email.includes('.com') ? {'isInvalidEmail' : true}:null;
    }
  }
  hasErrors(controlName:string,typeError:string){
    return this.formGroup.get(controlName)?.hasError(typeError) && this.formGroup.get(controlName)?.touched
  }
  validRegex():ValidatorFn{
    return (control) => {
      const name = control.value as string;
      const regex = /^(?=.*[a-z])(?=.*[A-Z])/; // Expresión regular para verificar que haya al menos una mayúscula y una minúscula
      if (!regex.test(name)) {
        return { 'invalidName': true };
      }
      return null;
    };
  }

}
