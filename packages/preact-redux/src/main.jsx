import '@akrawiel-sfc/common/main.css'

import { h, render } from 'preact'
import { Provider } from 'react-redux'

import store from './store'
import Todos from './Todos'

const App = () => (
  <Provider store={store}>
    <Todos />
  </Provider>
);

render(<App />, document.querySelector('#app'))
