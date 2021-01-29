import { nanoid } from "nanoid"

export default class {
  onCreate() {
    this.state = {
      text: '',
      todos: []
    }
  }

  addTodo(event) {
    event.preventDefault()

    this.state.todos = [
      ...this.state.todos,
      {
        id: nanoid(),
        text: this.state.text
      }
    ]

    this.state.text = ''
  }

  removeTodo(todoId) {
    this.state.todos = this.state.todos.filter(
      ({ id }) => id !== todoId
    )
  }

  setText(event) {
    this.state.text = event.target.value
  }
}
