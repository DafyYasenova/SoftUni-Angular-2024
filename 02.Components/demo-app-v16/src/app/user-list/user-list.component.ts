import { Component } from '@angular/core';

type User = {
  name: string;
  age: number;
  status: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  
  users = [
    { name: 'Ivo', age: 18, status: 'red'},
    { name: 'Ani', age: 28, status: 'blue'},
    { name: 'Toni', age: 38, status: 'pink'},
    { name: 'Moni', age: 48, status: 'green'},
  ] as User[];
  
 
}

