import { nanoid } from 'nanoid';
import { h } from 'preact';
import { atom, useRecoilState } from 'recoil'

const todosState = atom({
  key: 'todosState',
  default: []
})

const textState = atom({
  key: 'textState',
  default: ''
})

const Todos = () => {
  const [todos, setTodos] = useRecoilState(todosState)
  const [text, setText] = useRecoilState(textState)

  const addTodo = (event) => {
    event.preventDefault()

    setTodos([
      ...todos,
      {
        id: nanoid(),
        text
      }
    ])

    setText('')
  }

  const removeTodo = (todo) => (event) => {
    event.preventDefault()

    setTodos(
      todos.filter(({ id }) => id !== todo.id)
    )
  }

  return (
    <div class="todo-container">
      <form onSubmit={addTodo} class="todo-form">
        <input
          name="text"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Add a new task" />
        <button type="submit">OK</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} class="todo">
          <div class="todo-description">
            <div>{todo.text}</div>
            <small>{todo.id}</small>
          </div>
          <button class="todo-remove" onClick={removeTodo(todo)}> &times; </button>
        </div>
      ))}
    </div>
  )
}

export default Todos
