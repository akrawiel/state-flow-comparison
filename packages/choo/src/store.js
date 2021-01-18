import { nanoid } from 'nanoid'

const todoStore = (state, emitter) => {
  state.text = ''
  state.todos = []

  emitter.on('addTodo', () => {
    state.todos = [
      ...state.todos,
      {
        id: nanoid(),
        text: state.text
      }
    ]
    state.text = ''

    emitter.emit('render')
  })

  emitter.on('removeTodo', (todoId) => {
    state.todos = state.todos.filter(
      ({ id }) => id !== todoId
    )

    emitter.emit('render')
  })

  emitter.on('setText', (text) => {
    state.text = text

    emitter.emit('render')
  })
}

export default todoStore
