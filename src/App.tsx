import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { RootReducer } from './store/rootReducers'
import { AppRoute } from './Route'

const store = createStore(RootReducer)

function App () {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  )
}

export default App
