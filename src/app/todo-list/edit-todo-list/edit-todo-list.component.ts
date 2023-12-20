import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TodoListService } from '../shared/todo-list.service';
import { TodoListModel } from '../shared/todo-list.model';

@Component({
  selector: 'app-edit-todo-list',
  templateUrl: './edit-todo-list.component.html',
  styleUrls: ['./edit-todo-list.component.scss'],
})
export class EditTodoListComponent implements OnInit {
  idTodo: number;

  @ViewChild('editForm') editForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private service: TodoListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((x) => {
      this.idTodo = +x['id'];

      if (!this.todoLists[this.idTodo]) {
        this.router.navigateByUrl('');
      }
    });
  }

  get todoLists(): Array<TodoListModel> {
    return this.service.getTodoLists();
  }

  onSubmit(idTodo: number) {
    const newTodoList = {
      addInput: this.editForm.value.addInput,
      isDone: false,
    };

    this.service.updateTodoList(newTodoList, idTodo);

    this.editForm.reset();
  }
}
