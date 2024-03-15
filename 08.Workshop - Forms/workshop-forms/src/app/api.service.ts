import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTheme(id:string){
    const { apiURL } = environment;
    return this.http.get<Theme>(`${apiURL}/themes/${id}`);
  }

  createTheme(themeName: string, postText: string) {
    const { apiURL } = environment;
    const payload = { themeName, postText };
    return this.http.post<Theme>(`${apiURL}/themes`, payload);
  }
  getThemes() {
    const { apiURL } = environment;
    return this.http.get<Theme[]>(`${apiURL}/themes`);
  }

  getPosts(limit?: number) {
    const { apiURL } = environment;

    let url = `${apiURL}/posts`;

    if (limit) {
      url += `?limit=${limit}`
    }
    return this.http.get<Post[]>(url);
  }
}
