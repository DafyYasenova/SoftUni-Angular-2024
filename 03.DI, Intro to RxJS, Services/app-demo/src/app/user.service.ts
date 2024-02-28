import { Injectable, OnDestroy } from '@angular/core';
import { JsonPlaceHolderUser, User } from './type/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
URL = 'https://jsonplaceholder.typicode.com/users';
  users: JsonPlaceHolderUser[] = [ ];


  constructor(private http: HttpClient) {}
  ngOnDestroy(): void {
    // clear
  }

  getUsers() {
    // return fetch(this.URL).then((res) => res.json());
    return this.http.get<JsonPlaceHolderUser[]>(this.URL)
  }

addUser(inputName: HTMLInputElement, inputEmail: HTMLInputElement){

const user: User = {
  name: inputName.value,
  email: inputEmail.value,
} as JsonPlaceHolderUser
  // this.users.push(user); //push, but not update
  // this.users = [...this.users, user]; // update ref
  console.log(this.users);

  // clear input:
  inputName.value='';
  inputEmail.value='';
}
}
