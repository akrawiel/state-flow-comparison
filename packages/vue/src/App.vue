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
      <button class="todo-remove" @click="removeTodo(todo)">&times;</button>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { nanoid } from "nanoid";

export default {
  name: "App",

  setup() {
    const todos = ref([]);

    const text = ref("");

    const addTodo = () => {
      const newTodo = {
        id: nanoid(),
        text: text.value,
      };

      todos.value = [...todos.value, newTodo];

      text.value = "";
    };

    const removeTodo = (todo) => {
      todos.value = todos.value.filter(({ id }) => id !== todo.id);
    };

    return {
      addTodo,
      removeTodo,
      text,
      todos,
    };
  },
};
</script>
