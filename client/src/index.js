import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App.jsx'
import { GlobalStyle } from './styles/index.js'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer  from './reducers'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <App/>
  </Provider>,
  document.querySelector('#root')
)
