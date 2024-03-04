import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app-17';

  tasks = [
    { id:1, name: 'Homework1', status: 'done'},
    { id:2, name: 'Homework2', status: 'todo'},
    { id:3, name: 'Homework3', status: 'inProgress'},
    { id:4, name: 'Homework4', status: 'inProgress'},
  ]
}
