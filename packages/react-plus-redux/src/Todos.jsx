import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Todos = () => {
  const todos = useSelector(state => state.todos)
  const text = useSelector(state => state.text)

  const dispatch = useDispatch()

  const addTodo = (event) => {
    event.preventDefault()

    dispatch({
      type: 'addTodo'
    })
  }

  const removeTodo = (todo) => (event) => {
    event.preventDefault()

    dispatch({
      type: 'removeTodo',
      todoId: todo.id
    })
  }

  const setText = (event) => {
    dispatch({
      type: 'setText',
      text: event.target.value
    })
  }

  return (
    <div class="todo-container">
      <form onSubmit={addTodo} class="todo-form">
        <input
          name="text"
          type="text"
          value={text}
          onChange={setText}
          placeholder="Add a new task" />
        <button type="submit">OK</button>
      </form>
      {todos.map((todo) => (
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
