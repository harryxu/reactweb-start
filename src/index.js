import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/index'
import rootSaga from './sagas'
import App from './App'

const initState = {
  users: []
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

function configureStore(initialState) {
  const store = createStore(rootReducer, initState, composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const store = configureStore(initState)

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
