import { RepositoryModel } from '../models/repositoryModel'
import { ResultGithubSearchDto } from '../models/resultGithubSearchDto'

export class GithubApiRepository {
  private readonly _githubSearchRepoBaseUrl = 'https://api.github.com/search/repositories?q=';

  public async search (repository: string): Promise<RepositoryModel[]> {
    let httpBody: ResultGithubSearchDto
    try {
      const httpResponse = await fetch(`${this._githubSearchRepoBaseUrl}${repository}`)

      if (httpResponse.status >= 400) {
        throw new Error(`${httpResponse.status}`)
      }
      httpBody = await httpResponse.json()
    } catch (err) {
      throw new Error()
    }

    const result: RepositoryModel[] = []

    httpBody.items.forEach((item) => {
      result.push(
        new RepositoryModel(
          item.id,
          item.full_name,
          item.description,
          item.stargazers_count,
          item.forks,
          item.open_issues,
          item.owner.id,
          item.owner.avatar_url,
          item.releases_url
        )
      )
    })

    return result
  }
}
