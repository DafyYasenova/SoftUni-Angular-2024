import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginForm') form: NgForm | undefined;

  formSubmitHandler() {

    if (!this.form) {
      return;
    }
    const form = this.form;

    if (form.invalid) {
      console.log('Form is Invalid!');
      return;
    }
    console.log(form.value);

    //form.value ==> ngModel on input
    const { email, password } = form.value;

    //2 ways: reseting data:
    // form.reset();
    form.setValue({ email: '', password: '' })

  }
}
