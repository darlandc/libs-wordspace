import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiNodeService {

  constructor(private http: HttpClient) {
    this.getAll();
  }

  API_URL = 'http://localhost:9090';

  posts = [];
  data: [];

  getAll() {
    this.http.get(this.API_URL).subscribe(data => {
      this.posts.push(data);
    });
  }


}
