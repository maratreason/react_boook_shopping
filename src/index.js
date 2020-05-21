import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

import createStore from './store'
import AppContainer from './containers/AppContainer'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)