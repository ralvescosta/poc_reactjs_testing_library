import { RepositoryModel } from '../../../models/repositoryModel'

export interface IRepositoryItemLikedViewModel {
  repository: RepositoryModel
  deleteRepository: () => void
}
