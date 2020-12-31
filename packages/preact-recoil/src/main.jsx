import '@akrawiel-sfc/common/main.css'

import { h, render } from 'preact';
import { RecoilRoot } from 'recoil'

import Todos from './Todos';

const App = () => (
  <RecoilRoot>
    <Todos />
  </RecoilRoot>
)

render(<App />, document.querySelector('#app'))
