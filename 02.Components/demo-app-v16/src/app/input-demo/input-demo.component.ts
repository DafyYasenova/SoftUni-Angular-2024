import { Component } from '@angular/core';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.css']
})
export class InputDemoComponent {
  title: string = 'Title';

  handleInput(usernameValue: string) {
    console.log('username:', usernameValue)
  }

  changeTitleHandler(newTitle: string) {
    this.title = newTitle;
  }
}
