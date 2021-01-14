import { nanoid } from "nanoid";

const TodosModel = {
  text: "",
  todos: [],
  addTodo: () => {
    TodosModel.todos = [
      ...TodosModel.todos,
      {
        id: nanoid(),
        text: TodosModel.text,
      },
    ]

    TodosModel.text = ""
  },
  removeTodo: (todoId) => {
    TodosModel.todos = TodosModel.todos.filter(({ id }) => id !== todoId)
  },
  setText: (text) => {
    TodosModel.text = text
  }
}

export default TodosModel
