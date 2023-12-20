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
  isSubmitted: boolean = false;
  isEdit: boolean = false;

  @ViewChild('f') addForm: NgForm;

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoLists = this.todoListService.getTodoLists();
  }

  get countTodolists() {
    return this.todoLists.length;
  }

  onSubmit() {
    if (!this.addForm.valid) {
      return;
    }

    const newTodoList = {
      addInput: this.addForm.value.addInput,
      isDone: false,
    };

    this.todoListService.setTodoLists(newTodoList);
    this.todoLists = this.todoListService.getTodoLists();

    this.addForm.reset();
  }

  onDelete(id: number) {
    this.todoListService.deleteTodoList(id);
  }

  onDoneTodolist(index: number) {
    this.todoLists[index] = {
      ...this.todoLists[index],
      isDone: !this.todoLists[index].isDone,
    };
  }

  onClearTodolist() {
    this.todoLists.splice(0, this.todoLists.length);
    this.todoListService.clearAllTodoLists();
  }
}
