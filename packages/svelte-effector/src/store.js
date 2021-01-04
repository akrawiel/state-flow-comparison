import { createEvent, createStore } from 'effector'
import {nanoid} from 'nanoid'

export const setText = createEvent()
export const addTodo = createEvent()
export const removeTodo = createEvent()

export const store = createStore({
  text: '',
  todos: []
})
  .on(setText, (state, text) => ({
    ...state,
    text
  }))
  .on(addTodo, (state) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id: nanoid(),
        text: state.text
      }
    ],
    text: ''
  }))
  .on(removeTodo, (state, todoId) => ({
    ...state,
    todos: state.todos.filter(
      ({ id }) => id !== todoId
    )
  }))
