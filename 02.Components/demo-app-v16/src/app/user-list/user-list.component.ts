import { Component } from '@angular/core';

type User = {
  name: string;
  age: number;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  isToggle = false;

  users = [
    { name: 'Ivo', age: 18 },
    { name: 'Ani', age: 28 },
    { name: 'Toni', age: 38 },
    { name: 'Moni', age: 48 },
  ] as User[];

  handleClick(event: Event) {
    console.log('clicked', event);
    this.isToggle = !this.isToggle;
  }
}

