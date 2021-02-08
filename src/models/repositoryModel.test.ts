
import { RepositoryModel } from './repositoryModel'

const fakeRepositoryCreated = {
  id: 1,
  description: 'Repository Teste',
  forks: 5,
  fullName: 'Repository Test React Testing Library',
  openIssues: 5,
  ownerAvatarUrl: 'null',
  ownerId: 5,
  releasesUrl: 'relesed',
  stargazersCount: 5
}
describe('Test Model Repository', () => {
  it('should create a model correctly', () => {
    const sut = RepositoryModel.create(fakeRepositoryCreated)
    expect(sut.id).toBe(fakeRepositoryCreated.id)
  })
})
