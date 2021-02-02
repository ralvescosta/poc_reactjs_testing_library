import { RepositoryModel } from '../models/repositoryModel'

export const Types = {
  ADD_REPOSITORY: '@repository/ADD_REPOSITORY',
  DELETE_REPOSITORY: '@repository/DELETE_REPOSITORY'
}

export const createRepositoryAction = (repository: RepositoryModel) => ({
  type: Types.ADD_REPOSITORY,
  payload: repository
})

export const deleteRepositoryAction = (repository: RepositoryModel) => ({
  type: Types.DELETE_REPOSITORY,
  payload: repository
})
