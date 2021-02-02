import { RepositoryModel } from '../../../models/repositoryModel'

export interface ISearchUsecase {
  search: (repository: string) => Promise<RepositoryModel[]>
}
