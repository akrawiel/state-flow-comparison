import Backbone from 'backbone'
import { nanoid } from 'nanoid'

const TodoModel = Backbone.Model.extend({
  defaults: {
    id: '',
    text: ''
  },

  initialize() {
    this.set('id', nanoid())
  }
})

const TodoCollection = Backbone.Collection.extend({
  model: TodoModel
})

export default TodoCollection
