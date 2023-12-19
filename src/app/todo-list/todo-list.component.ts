import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoListModel } from './shared/todo-list.model';
import { TodoListService } from './shared/todo-list.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoLists: Array<TodoListModel>;
  isSubmitted: boolean = false;
  isEdit: boolean = false;
  todoListId = new Subject();

  @ViewChild('f') addForm: NgForm;
  @ViewChild('editForm') editForm: NgForm;

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoLists = this.todoListService.getTodoLists();
  }

  onSubmit() {
    if (!this.addForm.valid) {
      return;
    }
    this.todoLists = [...this.todoLists, this.addForm.value];
    this.addForm.reset();
  }

  onDelete(id: number) {
    this.todoLists.splice(id, 1);
  }

  onEdit(id: number) {
    this.isEdit = true;
    this.todoListId.next(id);
  }

  onSaveEdit() {
    // this.todoListId.subscribe((x) => {
    //   console.log(x);
    // });
  }

  onDoneTodolist(index: number) {
    this.todoLists[index] = {
      ...this.todoLists[index],
      isDone: !this.todoLists[index].isDone,
    };
  }
}
