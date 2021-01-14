import { nanoid } from "nanoid"

export const getInitialState = () => ({
  todos: [],
  text: ''
})

export const AddTodo = (state, event) => {
  event.preventDefault()

  return {
    ...state,
    todos: [
      ...state.todos,
      {
        id: nanoid(),
        text: state.text,
      },
    ],
    text: ''
  }
}

export const RemoveTodo = (state, todoId) => ({
  ...state,
  todos: state.todos.filter(({ id }) => id !== todoId)
})

export const SetText = (state, event) => ({
  ...state,
  text: event.target.value
})
