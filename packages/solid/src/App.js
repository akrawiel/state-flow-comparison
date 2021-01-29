import { createState, produce } from "solid-js"
import { nanoid } from "nanoid"

export default function App() {
  const [state, setState] = createState({
    text: '',
    todos: []
  })

  const onInput = (event) => {
    setState('text', event.target.value)
  }

  const addTodo = (event) => {
    event.preventDefault()

    setState(produce((draftState) => {
      draftState.todos.push({
        id: nanoid(),
        text: draftState.text
      })

      draftState.text = ''
    }))
  }

  const removeTodo = (todo) => {
    setState(produce(draftState => {
      draftState.todos = draftState.todos.filter(
        ({ id }) => id !== todo.id
      )
    }))
  }

  return (
    <div class="todo-container">
      <form onSubmit={addTodo} class="todo-form">
        <input
          name="text"
          type="text"
          value={state.text}
          onInput={onInput}
          placeholder="Add a new task" />
        <button type="submit">OK</button>
      </form>
      {state.todos.map(
        (todo) => (
          <div key={todo.id} class="todo">
            <div class="todo-description">
              <div>{todo.text}</div>
              <small>{todo.id}</small>
            </div>
            <button class="todo-remove" onClick={() => removeTodo(todo)}> &times; </button>
          </div>
        )
      )}
    </div>
  );
}
