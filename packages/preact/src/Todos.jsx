import { nanoid } from 'nanoid'
import { h, Component } from 'preact'

export default class Todos extends Component {
  constructor() {
    super()

    this.state = {
      todos: [],
      text: ''
    }

    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.setText = this.setText.bind(this)
  }

  addTodo(event) {
    event.preventDefault()

    this.setState(
      prevState => ({
        text: '',
        todos: [
          ...prevState.todos,
          {
            id: nanoid(),
            text: prevState.text
          }
        ]
      })
    )
  }

  removeTodo(event, todoId) {
    event.preventDefault()

    this.setState(
      prevState => ({
        todos: prevState. todos.filter(
          ({ id }) => id !== todoId
        )
      })
    )
  }

  setText(event) {
    this.setState({
      text: event.target.value
    })
  }

  render(_props, { todos, text }) {
    return (
      <div class="todo-container">
        <form onSubmit={this.addTodo} class="todo-form">
          <input
            name="text"
            type="text"
            value={text}
            onChange={this.setText}
            placeholder="Add a new task" />
          <button type="submit">OK</button>
        </form>
        {todos.map((todo) => (
          <div key={todo.id} class="todo">
            <div class="todo-description">
              <div>{todo.text}</div>
              <small>{todo.id}</small>
            </div>
            <button class="todo-remove" onClick={(event) => this.removeTodo(event, todo.id)}> &times; </button>
          </div>
        ))}
      </div>
    )
  }
}
