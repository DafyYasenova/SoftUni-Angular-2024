import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { User } from '../type/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,



})
export class UsersListComponent {
@Input('users') usersListData: User[] = [];



constructor(private cd: ChangeDetectorRef) {

  setInterval(() => {
    this.cd.detectChanges();
    console.log('Changes Detected');
  },3000);
}
}
