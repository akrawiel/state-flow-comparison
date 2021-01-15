import { createAction, props } from "@ngrx/store";
import { Todo } from './todo.model';

export const addTodo = createAction(
  'todo: add todo',
)
export const removeTodo = createAction(
  'todo: remove todo',
  props<{ todo: Todo }>()
)
export const setText = createAction(
  'todo: set text',
  props<{ text: string }>()
)
