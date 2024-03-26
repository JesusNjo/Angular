import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipePersonalizado'
})
export class MiPipePersonalizadoPipe implements PipeTransform {

  transform(value:string): string | undefined {
    return value.toUpperCase() || "";
  }

}
