import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacs',
  templateUrl: './contacs.component.html',
  styleUrls: ['./contacs.component.css']
})
export class ContacsComponent {

  formGroup: FormGroup;
  usuarioActivo:any ={
    name: 'Francisco',
    lastname: 'Naranjo',
    dni: '2456484',
    email: 'naranjofjx@gmail.com'
   }
   dniType?:string;


  constructor(forms:FormBuilder){
    this.formGroup = forms.group({
      name: ['', [Validators.required, Validators.minLength(5), this.validRegex()]],
      lastname: ['', [Validators.required, Validators.minLength(5), this.validRegex()]],
      dniType: ['Select type', [Validators.required, Validators.minLength(5), this.validRegex()]],
      dni: ['', [Validators.required, Validators.minLength(5), this.validRegex()]],
      email: ['', [Validators.required, Validators.email, this.validToCom()]]
    })
  }


  ngOnInit(): void {
    this.formGroup.get('email')?.setValidators([Validators.email]); //<-- Para setear validadores fuera del constructor en caso de usar condifcionales.
    this.formGroup.get("lastname")?.clearValidators(); //<-- Para quitar los validadores en caso de ser necesario
    this.formGroup.get('lastname')?.updateValueAndValidity(); //<-- Para actualizar los validadores.
    this.formGroup.get('name')?.setValue(this.usuarioActivo.name); //<-- Para asignar propiedades individuales
    this.formGroup.patchValue({
      lastname: this.usuarioActivo.lastname,
      dni: this.usuarioActivo.dni,
      email: this.usuarioActivo.email
    }); //<-- Asignar todos los valores
    this.formGroup.get('name')?.disable(); //<--- Para desactivar modificaciones de usuario.
    this.formGroup.get('dni')?.disable(); 
    this.formGroup.get('email')?.disable(); 


    this.formGroup.valueChanges.subscribe(value=>{
      console.log(value); //<--- Para escuchar y ver lo que se va agregando en los campos.
    })

    this.formGroup.get('dniType')?.valueChanges.subscribe(value=>{
      this.dniType = value; // <-- Para vincular el campo y traer su valor escuchando los cambios
    })


  }





  enviar(){
    console.log(this.formGroup.value);
    console.log(this.formGroup.status);
    console.log(this.formGroup);
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
