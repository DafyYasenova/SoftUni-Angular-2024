import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { User } from './type/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-demo';


  // stop change detection
  // constructor(private cd: ChangeDetectorRef){
  //   setTimeout(() => {
  //     this.title = 'Changer from Detector!';
  //     this.cd.detectChanges();
  //   }, 3000);
  // }

// constructor(private cd: ChangeDetectorRef) {
//   // setTimeout(() =>{
//   //   this.title = 'Change from Angular!';
//   // }, 2000)

//   setInterval(() => {
//     this.cd.detectChanges();
//     console.log('Changes Detected');
//   },3000);
// }
  users: User[] = [
    { name: "Ani", age: 12 },
    { name: "Mimi", age: 23 },
    { name: "Toni", age: 22 },
    { name: "Ani", age: 12 },
    { name: "Bibi", age: 18 },

  ];

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
