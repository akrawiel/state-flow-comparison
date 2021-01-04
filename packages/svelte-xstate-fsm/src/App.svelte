<script>
  import { createMachine, assign, interpret } from "@xstate/fsm";
  import { nanoid } from "nanoid";
  import { onDestroy } from "svelte";

  let text = "";

  const todoMachine = createMachine(
    {
      id: "todo",
      initial: "current",
      context: {
        todos: [],
      },
      states: {
        current: {
          on: {
            add: {
              target: "current",
              actions: "add",
            },
            remove: {
              target: "current",
              actions: "remove",
            },
          },
        },
      },
    },
    {
      actions: {
        add: assign((context, event) => ({
          todos: [
            ...context.todos,
            {
              id: nanoid(),
              text: event.text,
            },
          ],
        })),
        remove: assign((context, event) => ({
          todos: context.todos.filter(({ id }) => id !== event.todoId),
        })),
      },
    }
  );

  const todoService = interpret(todoMachine);

  todoService.start();

  onDestroy(() => {
    todoService.stop();
  });

  const addTodo = () => {
    todoService.send({
      type: "add",
      text,
    });
    text = "";
  };

  const removeTodo = (todo) => {
    todoService.send({
      type: "remove",
      todoId: todo.id,
    });
  };

  $: todos = $todoService.context.todos;
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
