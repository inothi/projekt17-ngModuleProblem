import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: unknown, phone: string): unknown {
    return `+48 ${phone[0]}${phone[1]}${phone[2]}-${phone[3]}${phone[4]}${phone[5]}-${phone[6]}${phone[7]}${phone[8]}`;
  }
}
