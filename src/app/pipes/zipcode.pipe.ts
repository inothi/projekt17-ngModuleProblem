import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zipcode'
})
export class ZipcodePipe implements PipeTransform {

  transform(value: unknown, zipCode: string): any {
    if (!(/[0-9-]/i.test(zipCode)) && (zipCode.length >= 1)) {
      return `Nieprawidłowe dane`;
    } else if ((zipCode[0] == "-") || (zipCode[1] == "-") || (zipCode[3] == "-") || (zipCode[4] == "-") || (zipCode[5] == "-")) {
      return `Nieprawidłowe dane`;
    } else if ((zipCode.length === 6) && (zipCode[2] == "-")) {
      return `${zipCode}`;
    } else if ((zipCode.length === 7) && (zipCode[2] == "-")) {
      return `${zipCode}`;
    } else if ((zipCode.length === 5) && !(zipCode.includes("-"))) {
      return `${zipCode[0]}${zipCode[1]}-${zipCode[2]}${zipCode[3]}${zipCode[4]}`;
    } else if ((zipCode.length === 6) && !(zipCode.includes("-"))) {
      return `${zipCode[0]}${zipCode[1]}-${zipCode[2]}${zipCode[3]}${zipCode[4]}${zipCode[5]}`;
    } else if (zipCode.length >= 7) {
      return `Nieprawidłowe dane`;
    } else if (zipCode.length >= 1) {
      return `Przetwarzanie...`;
    }
  }
}
