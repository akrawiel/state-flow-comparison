<script>
  import { store, addTodo, removeTodo, setText } from "./store";
</script>

<div class="todo-container">
  <form on:submit|preventDefault={addTodo} class="todo-form">
    <input
      name="text"
      type="text"
      value={$store.text}
      on:input={(event) => setText(event.target.value)}
      placeholder="Add a new task" />
    <button type="submit">OK</button>
  </form>
  {#each $store.todos as todo (todo.id)}
    <div class="todo">
      <div class="todo-description">
        <div>{todo.text}</div>
        <small>{todo.id}</small>
      </div>
      <button class="todo-remove" on:click={removeTodo(todo.id)}>
        &times;
      </button>
    </div>
  {/each}
</div>
