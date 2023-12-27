import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoListService } from './shared/todo-list.service';
import { EditTodoListComponent } from './edit-todo-list/edit-todo-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [TodoListComponent, EditTodoListComponent, TodoListItemComponent],
  imports: [AppRoutingModule, FormsModule, CommonModule],
  providers: [TodoListService],
})
export class TodoListModule {}
