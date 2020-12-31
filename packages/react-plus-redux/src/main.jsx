import 'common/main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Todos from './Todos'

const App = () => (
  <Provider store={store}>
    <Todos />
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('#app'))
