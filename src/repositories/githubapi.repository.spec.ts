import fetch from 'jest-fetch-mock'
import { GithubApiRepository } from './githubapi.repository'
import { MockResultGithubRepositorySearch } from './mocks/mock'

fetch.enableMocks()

const makeSut = () => {
  const sut = new GithubApiRepository()

  return { sut }
}

describe('GithubApiRepository', () => {
  beforeEach(() => {
    fetch.resetMocks()
    jest.clearAllMocks()
  })
  it('search()', async () => {
    const { sut } = makeSut()
    fetch.mockResponseOnce(JSON.stringify(MockResultGithubRepositorySearch))

    await sut.searchRepository('something')

    expect(fetch).toHaveBeenCalledTimes(1)
  })
})

export default {}
