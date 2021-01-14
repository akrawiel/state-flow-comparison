import '@akrawiel-sfc/common/main.css'

import m from 'mithril'

import TodosModel from './store'

const App = {
  view: () => (
    m(".todo-container",
      m("form.todo-form",
        {
          onsubmit: (event) => {
            event.preventDefault()
            TodosModel.addTodo()
          }
        },
        m("input",
          {
            type: "text",
            name: "text",
            placeholder: "Add a new task",
            oninput: (event) => {
              TodosModel.setText(event.target.value)
            },
            value: TodosModel.text
          }
        ),
        m("button", { type: "submit" }, "OK")
      ),
      TodosModel.todos.map(
        ({ id, text }) => m(".todo",
          m(".todo-description",
            m("div", text),
            m("small", id),
          ),
          m("button.todo-remove",
            { 
              onclick: () => {
                TodosModel.removeTodo(id)
              }
            },
            "×"
          )
        )
      )
    )
  )
}

m.mount(document.querySelector('#app'), App)
