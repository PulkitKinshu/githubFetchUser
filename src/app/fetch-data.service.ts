import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(public http: HttpClient) { }

  endPoint = 'https://api.github.com/search/users';

  fetchUser(text) {
    return this.http.get(this.endPoint + '?q=' + text)
  }


  fetchDetail(name){
    return this.http.get(`https://api.github.com/users/${name}/repos`)
  }

  
}
