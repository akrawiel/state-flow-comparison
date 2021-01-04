<script>
  import { text, todos, addTodo, removeTodo, setText } from "./store";

  const onAddTodo = () => {
    addTodo(text);
    setText("");
  };

  const onRemoveTodo = (todoId) => {
    removeTodo(todoId);
  };

  const onSetText = (event) => {
    setText(event.target.value);
  };
</script>

<div class="todo-container">
  <form on:submit|preventDefault={onAddTodo} class="todo-form">
    <input
      name="text"
      type="text"
      value={$text}
      on:input|preventDefault={onSetText}
      placeholder="Add a new task" />
    <button type="submit">OK</button>
  </form>
  {#each $todos as todo (todo.id)}
    <div class="todo">
      <div class="todo-description">
        <div>{todo.text}</div>
        <small>{todo.id}</small>
      </div>
      <button class="todo-remove" on:click={onRemoveTodo(todo.id)}>
        &times;
      </button>
    </div>
  {/each}
</div>
