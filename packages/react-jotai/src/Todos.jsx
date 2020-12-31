import React from 'react'

import useTodos  from './store'

const Todos = () => {
  const store = useTodos()

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
    <div className="todo-container">
      <form onSubmit={addTodo} className="todo-form">
        <input
          name="text"
          type="text"
          value={store.text}
          onChange={setText}
          placeholder="Add a new task" />
        <button type="submit">OK</button>
      </form>
      {store.todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-description">
            <div>{todo.text}</div>
            <small>{todo.id}</small>
          </div>
          <button className="todo-remove" onClick={removeTodo(todo)}> &times; </button>
        </div>
      ))}
    </div>
  )
}

export default Todos
