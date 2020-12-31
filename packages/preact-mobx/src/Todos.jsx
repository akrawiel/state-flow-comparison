import { observer, useLocalObservable } from 'mobx-react-lite'
import { h } from 'preact'

import todosObservable from './store'

const Todos = observer(() => {
  const store = useLocalObservable(todosObservable)

  const addTodo = (event) => {
    event.preventDefault()

    store.addTodo()
  }

  const removeTodo = (todo) => (event) => {
    event.preventDefault()

    store.removeTodo(todo.id)
  }

  const setText = (event) => {
    store.setText(event.target.value)
  }

  return (
    <div class="todo-container">
      <form onSubmit={addTodo} class="todo-form">
        <input
          name="text"
          type="text"
          value={store.text}
          onChange={setText}
          placeholder="Add a new task" />
        <button type="submit">OK</button>
      </form>
      {store.todos.map((todo) => (
        <div key={todo.id} class="todo">
          <div class="todo-description">
            <div>{todo.text}</div>
            <small>{todo.id}</small>
          </div>
          <button class="todo-remove" onClick={removeTodo(todo)}> &times; </button>
        </div>
      ))}
    </div>
  )
})

export default Todos
