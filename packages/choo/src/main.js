import '@akrawiel-sfc/common/main.css'

import choo from 'choo'
import html from 'choo/html'

import todoStore from './store'

const app = choo()
app.use(todoStore)
app.route('/', (state, emit) => {
  const onSubmit = (event) => {
    event.preventDefault()

    emit('addTodo')
  }

  const onInput = (event) => {
    emit('setText', event.target.value)
  }

  const onRemoveClick = (todoId) => {
    emit('removeTodo', todoId)
  }

  return html`
    <div id="app">
      <div class="todo-container">
        <form onsubmit=${onSubmit} class="todo-form">
          <input
            name="text"
            type="text"
            value=${state.text}
            oninput=${onInput}
            placeholder="Add a new task" />
          <button type="submit">OK</button>
        </form>
        ${state.todos.map(
          todo => html`
            <div class="todo" id=${todo.id}>
              <div class="todo-description">
                <div>${todo.text}</div>
                <small>${todo.id}</small>
              </div>
              <button class="todo-remove" onclick=${() => onRemoveClick(todo.id)}>×</button>
            </div>
          `
        )}
      </div>
    </div>
  `
})

app.mount('#app')
