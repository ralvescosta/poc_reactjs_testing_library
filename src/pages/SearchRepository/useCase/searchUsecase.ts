import { RepositoryModel } from '../../../models/repositoryModel'
import { ISearchGithubApiRepository } from '../interfaces/isearchGithubApiRepository'
import { ISearchUsecase } from '../interfaces/isearchUseace'

export class SearchUsecase implements ISearchUsecase {
  constructor (private readonly _githubApiRepository: ISearchGithubApiRepository) {}

  public async search (repository: string): Promise<RepositoryModel[]> {
    const result = await this._githubApiRepository.searchRepository(repository)

    return result
  }
}
