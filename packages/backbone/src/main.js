import '@akrawiel-sfc/common/main.css'

import Backbone from 'backbone'
import template from 'underscore/modules/template'

import TodoCollection from './store'

const App = Backbone.View.extend({
  todos: new TodoCollection(),

  el: document.querySelector('#app'),

  initialize() {
    this.render()
    this.renderTodos()

    this.listenTo(this.todos, "add", this.renderTodos)
    this.listenTo(this.todos, "remove", this.renderTodos)
  },

  events: {
    "submit form.todo-form": "onSubmit",
    "click button.todo-remove": "onRemove"
  },

  onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)

    this.todos.add([
      {
        text: formData.get('text')
      }
    ])

    event.target.reset()
  },

  onRemove(event) {
    const { id: todoId } = event.target.dataset

    this.todos.remove(todoId)
  },
  
  template: template(`
    <div class="todo-container">
      <form class="todo-form">
        <input
          name="text"
          type="text"
          placeholder="Add a new task" />
        <button type="submit">OK</button>
      </form>
      <div class="todos-container"></div>
    </div>
  `),

  todosTemplate: template(`
    <% for (const todo of todos) { %>
      <div class="todo">
        <div class="todo-description">
          <div><%= todo.attributes.text %></div>
          <small><%= todo.id %></small>
        </div>
        <button class="todo-remove" data-id="<%= todo.id %>">&times;</button>
      </div>
    <% } %>
  `),

  render() {
    this.$el.html(this.template())
    return this
  },

  renderTodos() {
    this.$el.find(".todos-container").html(
      this.todosTemplate({ todos: this.todos.toArray() })
    )
    return this
  }
})

new App()
