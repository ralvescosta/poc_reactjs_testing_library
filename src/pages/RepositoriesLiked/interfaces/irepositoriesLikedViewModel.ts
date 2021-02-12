import { RepositoryModel } from '../../../models/repositoryModel'

export interface IRepositoriesLikedViewModel {
  repositories: RepositoryModel[]
  deleteRepository:(repository:RepositoryModel)=> void
}
