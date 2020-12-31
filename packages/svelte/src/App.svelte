<script>
  import { nanoid } from "nanoid";

  let text = "";

  let todos = [];

  const addTodo = () => {
    todos = [
      ...todos,
      {
        id: nanoid(),
        text,
      },
    ];

    text = "";
  };

  const removeTodo = (todo) => {
    todos = todos.filter(({ id }) => id !== todo.id);
  };
</script>

<div class="todo-container">
  <form on:submit|preventDefault={addTodo} class="todo-form">
    <input
      name="text"
      type="text"
      bind:value={text}
      placeholder="Add a new task" />
    <button type="submit">OK</button>
  </form>
  {#each todos as todo (todo.id)}
    <div class="todo">
      <div class="todo-description">
        <div>{todo.text}</div>
        <small>{todo.id}</small>
      </div>
      <button class="todo-remove" on:click={removeTodo(todo)}> &times; </button>
    </div>
  {/each}
</div>
