import { Component } from '@angular/core';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.css']
})
export class InputDemoComponent {
handleInput(usernameValue: string){
console.log('username:', usernameValue)
}
}
