import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-reducers',
  templateUrl: './reducers.component.html',
  styles: []
})
export class ReducersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('lib reducers here!')
  }

}
