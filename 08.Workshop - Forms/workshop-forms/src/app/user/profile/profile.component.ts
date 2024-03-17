import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  showEditMode: boolean = false;


  profileDetails: ProfileDetails = {
    username: 'John Doe',
    email: 'johndoe@abv.bg',
    tel: '123-456',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    tel: ['',[Validators.required, Validators.minLength(6)]],
  })
  constructor(private fb: FormBuilder) { }

  onToggle(): void {
    this.showEditMode = !this.showEditMode;
  }


saveProfileHandler(): void{

  console.log('invoked data', this.form.value)
  if(this.form.invalid){
    return;
  }
  
  this.profileDetails = this.form.value as ProfileDetails;
  this.onToggle();
}


onCancel(e: Event){
  e.preventDefault();
  this.onToggle();

}
}
