import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { EditTodoListComponent } from './todo-list/edit-todo-list/edit-todo-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
  {
    path: 'todo-list',
    component: TodoListComponent,
    children: [{ path: 'edit/:id', component: EditTodoListComponent }],
  },
  { path: 'not-found', component: NotFoundComponent },

  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
