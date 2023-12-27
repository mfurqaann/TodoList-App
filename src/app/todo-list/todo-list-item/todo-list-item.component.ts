import { Component, Input, OnInit } from '@angular/core';
import { TodoListModel } from '../shared/todo-list.model';
import { TodoListService } from '../shared/todo-list.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
  @Input() todoLists: Array<TodoListModel>;

  editTaskValue: string;
  indexOrder: number;

  constructor(private todoListService: TodoListService) {}

  onDelete(id: number) {
    this.todoListService.deleteTodoList(id);
  }

  onDoneTodolist(index: number) {
    this.todoLists[index] = {
      ...this.todoLists[index],
      isDone: true,
    };
  }

  onEdit(id: number) {
    const selectedTask = this.todoLists[id];

    this.editTaskValue = selectedTask.addInput;
    this.indexOrder = id;
  }

  onSubmitEdit() {
    const id = this.indexOrder;
    const newTodoList = {
      addInput: this.editTaskValue,
      isDone: false,
    };

    this.todoListService.updateTodoList(newTodoList, id);
  }
}
