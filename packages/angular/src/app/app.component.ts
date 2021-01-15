import { Component } from '@angular/core';
import { nanoid } from 'nanoid';

interface Todo {
  id: string;
  text: string;
}

@Component({
  selector: '#app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  todos: Todo[] = [];

  inputValue: string = '';

  addTodo(event : Event) {
    event.preventDefault();

    this.todos = [
      ...this.todos,
      {
        id: nanoid(),
        text: this.inputValue
      }
    ];

    this.inputValue = '';
  }

  removeTodo(todoId: string) {
    this.todos = this.todos.filter(
      ({ id }) => id !== todoId
    );
  }
}
