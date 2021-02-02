import { combineReducers } from 'redux'

import { repositoriesReducer, TRepositoriesReducer } from './repositoriesReducer'

export type TRootReducer = {
  repositoriesStore: TRepositoriesReducer
}

export const RootReducer = combineReducers({
  repositoriesReducer: repositoriesReducer
})
