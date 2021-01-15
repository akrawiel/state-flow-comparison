import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State, Todo } from './todo.model';
import { addTodo, removeTodo, setText } from './todo.actions';

@Component({
  selector: '#app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  todos$: Observable<Todo[]>
  text$: Observable<string>

  constructor(private store: Store<{ todo: State }>) {
    this.todos$ = store.select('todo', 'todos')
    this.text$ = store.select('todo', 'text')
  }

  addTodo(event: Event) {
    event.preventDefault();

    this.store.dispatch(addTodo())
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(removeTodo({ todo }))
  }

  setText(text: string) {
    this.store.dispatch(setText({ text }))
  }
}
