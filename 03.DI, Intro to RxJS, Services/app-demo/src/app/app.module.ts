import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersItemComponent } from './users-item/users-item.component';
import { waitForAsync } from '@angular/core/testing';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// class Person {

//   public balance = 0;
//   public name = 'Pesho';

//   public color = '';
//   private getName() { }
// }

// class BetterPerson extends Person{ }
// const p = new Person();


class Wallet {
  balance = 0;

  constructor(balance: number) {
    this.balance = balance;
  }
}

class Car {
  model: string;
  color: string;
  constructor(model: string, color: string) {
    this.model = model;
    this.color = color;
  }
}

// Bad way:
class Person {
  wallet: Wallet;
  car: Car;

  constructor(balance: number, model: string, color: string) {
    this.wallet = new Wallet(balance);
    this.car = new Car(model, color);
  }
}

const pesho = new Person(1000, 'Audi', 'white');
const ivan = new Person(2000, 'BWM', 'black');

console.log(pesho.wallet.balance);
console.log(pesho.car.model);
console.log(ivan.car.model);
console.log(ivan.wallet.balance);

//Better way:
class PersonOptimized {
  wallet: Wallet;
  car: Car;

  constructor(wallet: Wallet, car: Car) {
    this.car = car;
    this.wallet = wallet;

  }
}


const person1Wallet = new Wallet(3333);
const person1Car = new Car ('Audi', 'blue');
const person1Person = new PersonOptimized(person1Wallet, person1Car);
console.log(person1Person)