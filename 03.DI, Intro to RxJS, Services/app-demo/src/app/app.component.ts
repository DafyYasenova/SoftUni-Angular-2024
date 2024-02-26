import { Component } from '@angular/core';
import { User } from './type/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-demo';

  users: User[] = [
    { name: "Ani", age: 12 },
    { name: "Mimi", age: 23 },
    { name: "Toni", age: 22 },
    { name: "Ani", age: 12 },
    { name: "Bibi", age: 18 },

  ];


}
