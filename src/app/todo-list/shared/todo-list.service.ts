import { Injectable } from '@angular/core';
import { TodoListModel } from './todo-list.model';

@Injectable()
export class TodoListService {
  todoLists: Array<TodoListModel> = [
    { addInput: 'Futsal', isDone: false },
    { addInput: 'Football', isDone: true },
  ];

  getTodoLists() {
    return this.todoLists;
  }
}
