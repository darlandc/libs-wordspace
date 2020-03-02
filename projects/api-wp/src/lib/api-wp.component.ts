import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-api-wp',
  templateUrl: './api-wp.component.html',
  styles: []
})
export class ApiWpComponent implements OnInit {

  posts = [];
  data: [];
  res: [];
  contents: [];

  constructor(private http: HttpClient) {}

    ngOnInit(): void {


    }

    getAll() {
      this.http.get('http://localhost:8888/final/go/api/get_recent_posts/').subscribe(data => {
        this.posts.push(data);
        // console.log(this.posts[0].posts);
        this.contents = this.posts[0].posts;
        console.log(this.contents);
      });
    }

}
