import { nanoid } from 'nanoid'

const todosObservable = () => ({
  todos: [],

  text: '',

  addTodo() {
    this.todos = [
      ...this.todos,
      {
        id: nanoid(),
        text: this.text
      }
    ]

    this.text = ''
  },

  removeTodo(todoId) {
    this.todos = this.todos.filter(
      ({ id }) => id !== todoId
    )
  },

  setText(text) {
    this.text = text
  }
})

export default todosObservable
