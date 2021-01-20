import { combineReducers } from 'redux'

import { todosReducer, TTodoReducer } from './todosReducer'

export type TStore = {
  todosStore: TTodoReducer
}

export const RootReducer = combineReducers({
  todosStore: todosReducer
})
