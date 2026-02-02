import { Component } from '@angular/core';
import { Todo } from './todo/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Todo],
  template: '<app-todo></app-todo>',
  styles: []
})
export class App {
  title = 'todo-list-app';
}