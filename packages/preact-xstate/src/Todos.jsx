import { h } from 'preact'
import { useMachine } from '@xstate/react'

import todoMachine from './store'

const Todos = () => {
  const [store, send] = useMachine(todoMachine)

  const addTodo = (event) => {
    event.preventDefault()

    send('addTodo')
  }

  const removeTodo = (todo) => (event) => {
    event.preventDefault()

    send('removeTodo', {
      todoId: todo.id
    })
  }

  const setText = (event) => {
    send('setText', {
      text: event.target.value
    })
  }

  return (
    <div class="todo-container">
      <form onSubmit={addTodo} class="todo-form">
        <input
          name="text"
          type="text"
          value={store.context.text}
          onChange={setText}
          placeholder="Add a new task" />
        <button type="submit">OK</button>
      </form>
      {store.context.todos.map((todo) => (
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
