import { ChangeDetectorRef, Component } from '@angular/core';
import { User } from './type/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

constructor() {
  setTimeout(() =>{
    this.title = 'Change from Angular!';
  }, 2000)
}
  users: User[] = [
    { name: "Ani", age: 12 },
    { name: "Mimi", age: 23 },
    { name: "Toni", age: 22 },
    { name: "Ani", age: 12 },
    { name: "Bibi", age: 18 },

  ];



}
