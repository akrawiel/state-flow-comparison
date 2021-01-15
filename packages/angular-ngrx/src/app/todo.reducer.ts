import { createReducer, on, Action } from '@ngrx/store'
import { nanoid } from 'nanoid'

import { addTodo, removeTodo, setText } from './todo.actions'
import { State } from './todo.model'

export const initialState : State = {
  todos: [],
  text: ''
}

const _todoReducer = createReducer(
  initialState,
  on(
    addTodo,
    state => ({
      ...state,
      todos: [
        ...state.todos,
        {
          id: nanoid(),
          text: state.text
        }
      ],
      text: ''
    })
  ),
  on(
    removeTodo,
    (state, { todo }) => ({
      ...state,
      todos: state.todos.filter(
        ({ id }) => id !== todo.id
      )
    })
  ),
  on(
    setText,
    (state, { text }) => ({
      ...state,
      text
    })
  )
)

export function todoReducer(state: State, action: Action) {
  return _todoReducer(state, action)
}
