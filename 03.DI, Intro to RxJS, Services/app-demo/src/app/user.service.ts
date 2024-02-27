import { Injectable, OnDestroy } from '@angular/core';
import { User } from './type/User';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

  users: User[] = [
    { name: "Ani", age: 12 },
    { name: "Mimi", age: 23 },
    { name: "Toni", age: 22 },
    { name: "Ani", age: 12 },
    { name: "Bibi", age: 18 },

  ];

  ngOnDestroy(): void {
    // clear
  }
addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement){

const user: User = {
  name:inputName.value,
  age: Number(inputAge.value),
}
  this.users.push(user); //push, but not update
  // this.users = [...this.users, user]; // update ref
  console.log(this.users);

  // clear input:
  inputName.value='';
  inputAge.value='';
}
}
