import { RepositoryModel } from '../../../models/repositoryModel'

export interface ISearchGithubApiRepository {
  searchRepository:(repository: string) => Promise<RepositoryModel[]>
}
