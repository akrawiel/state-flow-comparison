import { h } from 'preact'

import TodosContainer from './store'

const Todos = () => {
  const store = TodosContainer.useContainer()

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
}

export default Todos
