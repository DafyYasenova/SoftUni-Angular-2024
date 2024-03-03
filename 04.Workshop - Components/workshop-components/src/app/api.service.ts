import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes() {
    const { apiURL } = environment;
    return this.http.get<Theme[]>(`${apiURL}/themes`);
  }

  getPosts(limit?: number) {
const { apiURL} = environment;
return this.http.get<any>(`${apiURL}/posts`);
  }
}
