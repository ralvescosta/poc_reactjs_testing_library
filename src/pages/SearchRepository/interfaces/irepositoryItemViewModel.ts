import { RepositoryModel } from '../../../models/repositoryModel'

export interface IRepositoryItemViewModel {
  openModal: () => void
  repository: RepositoryModel
}
