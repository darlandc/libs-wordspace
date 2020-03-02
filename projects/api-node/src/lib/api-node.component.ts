import { ApiNodeService } from './api-node.service';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'lib-api-node',
  templateUrl: './api-node.component.html',
  styles: []
})
export class ApiNodeComponent implements OnInit {

  posts = [];
  content: any[];

  constructor(private api: ApiNodeService) { }

  ngOnInit(): void {
    this.api.getAll();
    this.content = this.api.posts;
    console.log(this.content);

  }

}
