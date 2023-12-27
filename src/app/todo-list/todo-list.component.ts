import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TodoListModel } from './shared/todo-list.model';
import { TodoListService } from './shared/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoLists: Array<TodoListModel>;
  addInput: string;

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.addInput = '';
    this.todoLists = this.todoListService.getTodoLists();
  }

  get countTodolists() {
    return this.todoLists.length;
  }

  onSubmit() {
    const newTodoList = {
      addInput: this.addInput,
      isDone: false,
    };

    this.todoListService.setTodoLists(newTodoList);

    this.ngOnInit();
  }

  onClearTodolist() {
    this.todoListService.clearAllTodoLists();
    this.ngOnInit();
  }
}
