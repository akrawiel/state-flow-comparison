import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { nanoid } from 'nanoid';

export default class TodosComponent extends Component {
  @tracked text = '';
  @tracked todos = [];

  @action
  addTodo(event) {
    event.preventDefault();

    this.todos = [
      ...this.todos,
      {
        id: nanoid(),
        text: this.text,
      },
    ];

    this.text = '';
  }

  @action
  setText(event) {
    this.text = event.target.value;
  }

  @action
  removeTodo(todoId) {
    this.todos = this.todos.filter(({ id }) => todoId !== id);
  }
}
