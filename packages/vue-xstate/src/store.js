import { nanoid } from 'nanoid'
import { assign, createMachine } from 'xstate'

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

export default todoMachine
