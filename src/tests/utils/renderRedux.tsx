// test-utils.js
import React from 'react'
import { render } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { RootReducer } from '../../store/rootReducers'
// Import your own reducer

function renderWithRedux (
  Element:React.ReactElement,
  initialState:any
) {
  const Wrapper = ({ children }:any) => {
    const fakeStore = createStore(RootReducer, initialState)

    return <Provider store={fakeStore}>{children}</Provider>
  }
  return render(Element, {
    wrapper: Wrapper
  })
}

export { renderWithRedux }
