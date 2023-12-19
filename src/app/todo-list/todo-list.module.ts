import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TodoListComponent],
  imports: [FormsModule, CommonModule],
  providers: [],
})
export class TodoListModule {}
