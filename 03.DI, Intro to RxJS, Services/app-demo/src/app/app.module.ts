import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersItemComponent } from './users-item/users-item.component';
import { Observable, interval, map, tap } from 'rxjs';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersItemComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
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

// Dependency injection

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
const person1Car = new Car('Audi', 'blue');
const person1Person = new PersonOptimized(person1Wallet, person1Car);
console.log(person1Person);



// promise:

const promise = new Promise((resolve, reject) => {
  console.log('promise invoked!')

  setTimeout(() => {
    resolve(111);
    // reject('Why');
  }, 3000);
});

promise.then((data) => {
  console.log('From promise', data);
}).then().then().catch((err) => console.error(err));


Promise.resolve(100)
  .then((data) => data * 10)
  .then((data) => console.log('From promise 2', data));



// observables:

const obs = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(4);

});

obs.subscribe((data) => {
  console.log('observable:', data)
});


// ** implement interval like interval from RxJS

// const interval = (intervalValue: number) => {
//   const observ = new Observable<number>((observer) => {
//     let counter = 0;

//     const timer = setInterval(() => {
//       observer.next(counter++)
//     }, intervalValue);


//     // clear onDestroy
//     return () => {
//       clearInterval(timer)
//     }
//   });

//   return observ;
// }
// interval(2000).subscribe((data) => {
//   console.log('Interval data:', data)


const stream$ = interval(2000)
.pipe(map((x) => x * 2))
.pipe(tap((x) => console.log(x + ': tap')));

// stream$.subscribe((data) => console.log('stream:', data))
stream$.subscribe({
  next: (data) => console.log('stream:', data),
  error: (error) => console.error('error:', error),
  complete: () => console.log('Stream has completed!'),

})