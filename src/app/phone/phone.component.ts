import { Component } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss'
})
export class PhoneComponent {
  phoneNumber: string = '';

  change(event: any) {
    if (event.value.length === 9) {
      this.phoneNumber = event.target.value;
    } else this.phoneNumber = ''
  }
}
