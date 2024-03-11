import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit{

  theme = { } as Theme;
constructor(private apiService: ApiService, private ActivatedRoute:  ActivatedRoute){}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(data =>{
      console.log(data);
      const id= data['themeId'];

      this.apiService.getTheme(id).subscribe((theme) => {
       
        this.theme = theme;
  
        console.log({theme})

    })
    })
  }
}
