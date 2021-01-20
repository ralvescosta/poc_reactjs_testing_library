import { combineReducers } from 'redux'

import { todosReducer } from './todosReducer'

export const RootReducer = combineReducers({
  todosStore: todosReducer
})
