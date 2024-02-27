import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { User } from './type/User';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-demo';

  constructor(public userService: UserService) { }

  setUsers(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    this.userService.addUser(inputName, inputAge);
    // additional functionality
  }

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


}
