import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserForAuth | undefined;

  USER_KEY = '[user]';
get isLogged(): boolean {
  return !!this.user;
}
  constructor() {
    try {
      const localSrotageUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(localSrotageUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login() { 
    this.user = {
      id: '5fa64c1f2183ce1728ff3723',
      firstName: 'Ivan',
      email: 'ivan@abv.bg',
      password: 'password',
      phoneNubmer: '123',
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {

    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
   }
}
