<script>
  import { nanoid } from "nanoid";

  import createStore from "./store.js";

  const store = createStore((set) => ({
    text: "",
    todos: [],
    setText: (text) => set(() => ({ text })),
    addTodo: () =>
      set((state) => ({
        todos: [
          ...state.todos,
          {
            id: nanoid(),
            text: state.text,
          },
        ],
        text: "",
      })),
    removeTodo: (todoId) =>
      set((state) => ({
        todos: state.todos.filter(({ id }) => id !== todoId),
      })),
  }));
</script>

<div class="todo-container">
  <form on:submit|preventDefault={$store.addTodo} class="todo-form">
    <input
      name="text"
      type="text"
      value={$store.text}
      on:change={(event) => $store.setText(event.target.value)}
      placeholder="Add a new task" />
    <button type="submit">OK</button>
  </form>
  {#each $store.todos as todo (todo.id)}
    <div class="todo">
      <div class="todo-description">
        <div>{todo.text}</div>
        <small>{todo.id}</small>
      </div>
      <button class="todo-remove" on:click={$store.removeTodo(todo.id)}>
        &times;
      </button>
    </div>
  {/each}
</div>
