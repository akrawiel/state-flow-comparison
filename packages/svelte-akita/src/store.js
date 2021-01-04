import { createEntityQuery, createEntityStore } from '@datorama/akita'
import {nanoid} from 'nanoid'

const store = createEntityStore(
  {
    ui: {
      text: ''
    }
  },
  { name: 'todos' }
)

export const addTodo = () => {
  store.add({
    id: nanoid(),
    text: store.getValue().ui.text
  })

  store.update({
    ui: {
      text: ''
    }
  })
}

export const removeTodo = (todoId) => {
  store.remove(todoId)
}

export const setText = (text) => {
  store.update({
    ui: {
      text
    }
  })
}

const storeQuery = createEntityQuery(store)

export const todos = storeQuery.selectAll()

export const text = storeQuery.select(({ ui }) => ui.text)
