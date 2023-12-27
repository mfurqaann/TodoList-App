import { Injectable } from '@angular/core';

import { TodoListModel } from './todo-list.model';

@Injectable()
export class TodoListService {
  todoLists: Array<TodoListModel> = [
    { addInput: 'Futsal', isDone: false },
    { addInput: 'Football', isDone: true },
  ];

  get countTodoLists() {
    return this.todoLists.length;
  }

  getTodoLists() {
    return this.todoLists;
  }

  setTodoLists(todoList: TodoListModel) {
    this.todoLists = [...this.todoLists, todoList];
  }

  updateTodoList(todoList: TodoListModel, id: number) {
    this.todoLists[id] = todoList;
  }

  deleteTodoList(id: number) {
    this.todoLists.splice(id, 1);
  }

  clearAllTodoLists() {
    this.todoLists.splice(0, this.countTodoLists);
  }
}
