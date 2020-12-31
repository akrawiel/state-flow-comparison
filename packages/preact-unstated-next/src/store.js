import { nanoid } from 'nanoid'
import { useState } from 'preact/compat'
import {createContainer} from 'unstated-next'

const useTodos = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState([])

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: nanoid(),
        text: text
      }
    ])

    setText('')
  }

  const removeTodo = (todoId) => {
    setTodos(
      todos.filter(
        ({ id }) => id !== todoId
      )
    )
  }

  return {
    todos,
    text,
    addTodo,
    removeTodo,
    setText
  }
}

const TodosContainer = createContainer(useTodos)

export default TodosContainer
