import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-todo-list',
  templateUrl: './edit-todo-list.component.html',
  styleUrls: ['./edit-todo-list.component.scss'],
})
export class EditTodoListComponent {
  constructor(private router: Router) {}

  onEdit() {
    console.log('edit');
    this.router.navigateByUrl('/todo-list');
  }
}
