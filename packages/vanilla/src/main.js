import '@akrawiel-sfc/common/main.css'

import { nanoid } from 'nanoid'

const app = document.querySelector('#app')
const form = document.querySelector('form')
const input = document.querySelector('input')
const todoContainer = document.querySelector('.todo-container')

window.addEventListener('DOMContentLoaded', () => {
  app.style.display = "flex"
})

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const newTodo = {
    id: nanoid(),
    text: input.value
  }

  const todoElement = document.createElement('div')
  todoElement.classList.add("todo")

  const todoDescriptionElement = document.createElement("div")
  todoDescriptionElement.classList.add("todo-description")

  const textElement = document.createElement("div")
  textElement.innerHTML = newTodo.text

  const idElement = document.createElement("small")
  idElement.innerHTML = newTodo.id

  todoDescriptionElement.appendChild(textElement)
  todoDescriptionElement.appendChild(idElement)

  const removeButton = document.createElement("button")
  removeButton.classList.add("todo-remove")
  removeButton.innerHTML = "×"

  const removeTodoListener = () => {
    removeButton.removeEventListener("click", removeTodoListener)
    todoContainer.removeChild(todoElement)
  }

  removeButton.addEventListener("click", removeTodoListener)

  todoElement.appendChild(todoDescriptionElement)
  todoElement.appendChild(removeButton)

  todoContainer.appendChild(todoElement)

  input.value = ''
})
