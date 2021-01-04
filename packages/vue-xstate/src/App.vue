<template>
  <div class="todo-container">
    <form @submit.prevent="addTodo" class="todo-form">
      <input name="text" type="text" v-model="text" placeholder="Add a new task" />
      <button type="submit">OK</button>
    </form>
    <div v-for="todo in state.context.todos" :key="todo.id" class="todo">
      <div class="todo-description">
        <div>{{ todo.text }}</div>
        <small>{{ todo.id }}</small>
      </div>
      <button class="todo-remove" @click="removeTodo(todo)">
        &times;
      </button>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useMachine } from '@xstate/vue'

import todoMachine from './store'

export default {
  name: 'App',

  setup() {
    const { send, state } = useMachine(todoMachine)

    const text = ref('')

    const addTodo = () => {
      send({
        type: 'add',
        text: text.value
      })

      text.value = ''
    }

    const removeTodo = (todo) => {
      send({
        type: 'remove',
        todoId: todo.id
      })
    }

    return {
      addTodo, 
      removeTodo,
      state,
      text,
    }
  }
}
</script>
