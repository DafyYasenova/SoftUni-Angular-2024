import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JsonPlaceHolderUser, User } from './type/User';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app-demo';
  appUsers: JsonPlaceHolderUser[] = [];

  isLoading = true;
  constructor(public userService: UserService) { }

  ngOnInit(): void {

    // this.userService.getUsers().then(users => {
    //   console.log('users data', users);

    //   this.appUsers = users;

    //   setTimeout(() => {
    //     this.isLoading = false;
    //   }, 3000);

    // })

  

  this.userService.getUsers().subscribe((users) =>{
    console.log('users data', users);

      this.appUsers = users;

      setTimeout(() => {
        this.isLoading = false;
      }, 3000);

  })
}
  setUsers(inputName: HTMLInputElement, inputEmail: HTMLInputElement) {
    this.userService.addUser(inputName, inputEmail);
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
