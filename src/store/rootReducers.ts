import { combineReducers } from 'redux'

import { repositoriesReducer, TRepositoriesReducer } from './repositoriesReducer'

export type TRootReducer = {
  repositoriesReducer: TRepositoriesReducer
}

export const RootReducer = combineReducers({
  repositoriesReducer: repositoriesReducer
})
