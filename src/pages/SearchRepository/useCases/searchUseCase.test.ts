import { ISearchGithubApiRepository } from '../interfaces/isearchGithubApiRepository'

import { SearchUsecase } from './searchUsecase'

describe('Teste caso de uso de busca de repositorio', () => {
  const GitHubRepositoryStubEmpty:ISearchGithubApiRepository = {
    searchRepository: jest.fn(() => Promise.resolve([]))
  }

  it('should ', async () => {
    const sut = new SearchUsecase(GitHubRepositoryStubEmpty)
    await sut.search('teste')
    expect(GitHubRepositoryStubEmpty.searchRepository).toBeCalledTimes(1)
  })
})
