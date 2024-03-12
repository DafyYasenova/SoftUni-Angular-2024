import { Component } from '@angular/core';
import { MyStructuralDirDirective } from '../my-structural-dir.directive';

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

  simpleClick(directiveRef:MyStructuralDirDirective){
    console.log(directiveRef)
  }
}
