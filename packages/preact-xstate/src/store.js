import { nanoid } from 'nanoid'
import { Machine, assign } from 'xstate'

const todoMachine = Machine(
  {
    id: "todo",
    initial: "current",
    context: {
      text: '',
      todos: [],
    },
    states: {
      current: {
        on: {
          addTodo: {
            target: "current",
            actions: "addTodo",
          },
          removeTodo: {
            target: "current",
            actions: "removeTodo",
          },
          setText: {
            target: "current",
            actions: "setText"
          }
        },
      },
    },
  },
  {
    actions: {
      addTodo: assign((context) => ({
        todos: [
          ...context.todos,
          {
            id: nanoid(),
            text: context.text,
          },
        ],
        text: ''
      })),
      removeTodo: assign((context, event) => ({
        todos: context.todos.filter(({ id }) => id !== event.todoId),
      })),
      setText: assign((_, event) => ({
        text: event.text
      }))
    },
  }
);

export default todoMachine
