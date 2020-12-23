import { nanoid } from "nanoid"
import { createStore } from "vuex";

export default createStore({
  state: () => ({
    todos: []
  }),

  actions: {
    addTodo({ commit }, text) {
      const newTodo = {
        id: nanoid(),
        text,
      }
      
      commit('addTodo', newTodo)
    },

    removeTodo({ commit }, todoId) {
      commit('removeTodo', todoId)
    }
  },

  mutations: {
    addTodo(state, newTodo) {
      state.todos = [...state.todos, newTodo]
    },

    removeTodo(state, todoId) {
      state.todos = state.todos.filter(
        ({ id }) => id !== todoId
      )
    }
  }
})
