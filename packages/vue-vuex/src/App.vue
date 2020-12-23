<template>
  <div class="todo-container">
    <form @submit.prevent="addTodo" class="todo-form">
      <input name="text" type="text" v-model="text" placeholder="Add a new task" />
      <button type="submit">OK</button>
    </form>
    <div v-for="todo in todos" :key="todo.id" class="todo">
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
import { useStore } from 'vuex'

export default {
  name: 'App',

  setup() {
    const store = useStore()
    
    const todos = computed(() => store.state.todos)

    const text = ref('')

    const addTodo = () => {
      store.dispatch(
        'addTodo',
        text.value
      )

      text.value = ''
    }

    const removeTodo = (todo) => {
      store.dispatch(
        'removeTodo',
        todo.id
      )
    }

    return {
      addTodo, 
      removeTodo,
      text,
      todos
    }
  }
}
</script>
