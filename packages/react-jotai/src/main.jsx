import '@akrawiel-sfc/common/main.css'

import { Provider } from 'jotai'
import React from 'react'
import ReactDOM from 'react-dom'

import Todos from './Todos'

const App = () => (
  <Provider>
    <Todos />
  </Provider>
)

ReactDOM.render(<App />, document.querySelector('#app'))
