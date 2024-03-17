import { Component } from '@angular/core';
import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  showEditMode: boolean= false;


  profileDetails: ProfileDetails = {
    username: 'John Doe',
    email:'johndoe@abv.bg',
    tel: '123-456',
  };
  onEdit():void{
    this.showEditMode = true;
  }





}
