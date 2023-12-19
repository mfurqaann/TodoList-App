import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { NavHeaderComponent } from './nav-header/nav-header.component';

@NgModule({
  declarations: [AppComponent, NavHeaderComponent],
  imports: [AppRoutingModule, BrowserModule, TodoListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
