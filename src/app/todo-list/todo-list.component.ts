import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todoLists: Array<any> = [{ addInput: 'Futsal' }, { addInput: 'Football' }];
  isSubmitted: boolean = false;
  @ViewChild('f') addForm: NgForm;

  constructor() {}

  onSubmit() {
    if (!this.addForm.valid) {
      return;
    }

    this.todoLists = [...this.todoLists, this.addForm.value];
    this.addForm.reset();
  }

  onClickCheckbox(id) {
    console.log(id);
  }
}
