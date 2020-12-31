import { atom, useAtom } from 'jotai'
import { nanoid } from 'nanoid'

const todosAtom = atom([])
export const textAtom = atom('')

const useTodos = () => {
  const [todos, setTodos] = useAtom(todosAtom)
  const [text, setText] = useAtom(textAtom)

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: nanoid(),
        text: text
      }
    ])

    setText('')
  }

  const removeTodo = (todoId) => {
    setTodos(
      todos.filter(
        ({ id }) => id !== todoId
      )
    )
  }

  return {
    todos,
    text,
    addTodo,
    removeTodo,
    setText
  }
}

export default useTodos
