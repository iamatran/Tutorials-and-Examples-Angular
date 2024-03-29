import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { Todo } from '../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id:1,
        title:'Todo One',
        completed:true
      },
      {
        id:2,
        title:'Todo Two',
        completed:false
      },
      {
        id:3,
        title:'Todo Three',
        completed:false
      }
    ]
  }

}
