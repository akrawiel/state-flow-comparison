import '@akrawiel-sfc/common/main.css'

import { h, render } from 'preact'
import TodosContainer from './store'

import Todos from './Todos'

const App = () => (
  <TodosContainer.Provider>
    <Todos />
  </TodosContainer.Provider>
)

render(<App />, document.querySelector('#app'))
