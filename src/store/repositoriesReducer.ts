import { Types } from './repositoriesActions'
import { RepositoryModel } from '../models/repositoryModel'

export type TRepositoriesReducer = {
  repositories: RepositoryModel[];
};
const INITIAL_STATE: TRepositoriesReducer = {
  repositories: []
}

type ActionType = {
  type: string;
  payload: any;
};

export const repositoriesReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case Types.ADD_REPOSITORY:
      return {
        ...state,
        repositories: [...state.repositories, action.payload]
      }

    case Types.DELETE_REPOSITORY:
      return {
        ...state,
        repositories: state.repositories.filter(repository => repository.id !== action.payload.id)
      }

    default:
      return state
  }
}
