import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projekt17';
  isName: boolean = false;

  arrayName = [
    {name: 'John', age: 20, salary: 3000.258, birthday: '1990-01-01 17:23'},
    {name: 'Doe', age: 25, salary: 3500, birthday: '1995-01-01 01:23'},
    {name: 'Jane', age: 30, salary: 3000, birthday: '2000-01-01'},
    {name: 'Doe', age: 35, salary: 4000, birthday: '2005-01-01'},
    {name: 'John', age: 40, salary: 4500, birthday: '2010-01-01'},
    {name: 'Jane', age: 45, salary: 4000, birthday: '2015-01-01'},
    {name: 'Doe', age: 50, salary: 5000, birthday: '2020-01-01'},
  ]
}
