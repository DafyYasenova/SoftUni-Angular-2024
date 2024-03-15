import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  form = this.fb.group({

    username: ['dummy'],
    email:['dummy"abv.bg'],
    tel:['123'],
    passGroup: this.fb.group({ password: ['123456'],
    rePassword: ['1234'],}),
   
  });

  constructor(private fb: FormBuilder){}

  register(): void {
    if(this.form.invalid){
      return;
    }

    console.log(this.form.value);
  }
}
