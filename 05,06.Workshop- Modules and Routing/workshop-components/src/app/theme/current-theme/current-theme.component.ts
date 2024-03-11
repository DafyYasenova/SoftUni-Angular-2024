import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit{
constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getTheme('5fa64a9f2183ce1728ff371a').subscribe((data) => {
      console.log(data)
    })
  }
}
