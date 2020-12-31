import { nanoid } from "nanoid";
import { createStore } from "redux";

const initialState = {
  todos: [],
  text: ''
}

const store = createStore(
  (state = initialState, action) => {
    switch (action.type) {
      case 'addTodo': {
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: nanoid(),
              text: state.text
            }
          ],
          text: ''
        }
      }

      case 'removeTodo': {
        return {
          ...state,
          todos: state.todos.filter(
            ({ id }) => id !== action.todoId
          )
        }
      }

      case 'setText': {
        return {
          ...state,
          text: action.text
        }
      }

      default: {
        return state
      }
    }
  }
)

export default store
