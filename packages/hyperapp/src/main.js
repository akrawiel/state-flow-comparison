import '@akrawiel-sfc/common/main.css'

import { h, text as textNode, app } from 'hyperapp'

import { getInitialState, AddTodo, RemoveTodo, SetText } from './store'

const InputProps = {
  type: 'text', name: 'text', placeholder: 'Add a new task', oninput: SetText 
}

app({
  init: getInitialState(),
  view: ({ todos, text }) => h('div', {}, [
    h('div', { class: 'todo-container' }, [
      h('form', { class: 'todo-form', onsubmit: AddTodo }, [
        h('input', { ...InputProps, value: text }),
        h('button', { type: 'submit' }, textNode('OK'))
      ]),
      ...todos.map(
        ({ id, text }) => h('div', { class: 'todo' }, [
          h('div', { class: 'todo-description' }, [
            h('div', {}, textNode(text)),
            h('small', {}, textNode(id)),
          ]),
          h('button', { class: 'todo-remove', onclick: [RemoveTodo, id] }, textNode('×'))
        ])
      )
    ])
  ]),
  node: document.querySelector('#app')
})
