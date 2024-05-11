import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPln'
})
export class CurrencyPlnPipe implements PipeTransform {

  transform(value: any, person: any): string {
    return `${this.multiply(value)} zł`;
  }

  multiply(val: number) {
   return val * 2;
  }

}
