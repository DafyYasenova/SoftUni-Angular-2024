import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isShow : boolean = true;


  toggle(){
    this.isShow = !this.isShow;
  }
}
