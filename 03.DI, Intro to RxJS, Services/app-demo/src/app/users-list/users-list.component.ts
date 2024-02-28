import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { JsonPlaceHolderUser, User } from '../type/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
@Input('users') usersListData: JsonPlaceHolderUser[] = [];


constructor(private cd: ChangeDetectorRef) {}

// ngOnChanges(changes: SimpleChanges): void {
//   // console.log('on changes');
// }
refresh(){
  this.cd.detectChanges()
}

// constructor(private cd: ChangeDetectorRef) {

//   setInterval(() => {
//     this.cd.detectChanges();
//     console.log('Changes Detected');
//   },3000);
// }
}
