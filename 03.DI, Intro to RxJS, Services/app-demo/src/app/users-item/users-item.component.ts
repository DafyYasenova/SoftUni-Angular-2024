import { Component, Input } from '@angular/core';
import { JsonPlaceHolderUser, User } from '../type/User';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.css']
})
export class UsersItemComponent {
@Input('user') user = {} as JsonPlaceHolderUser;
}
