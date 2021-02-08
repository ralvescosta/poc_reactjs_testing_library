export class RepositoryModel {
  constructor (
    public readonly id: number,
    public readonly fullName: string,
    public readonly description: string,
    public readonly stargazersCount: number,
    public readonly forks: number,
    public readonly openIssues: number,
    public readonly ownerId: number,
    public readonly ownerAvatarUrl: string,
    public readonly releasesUrl: string
  ) {}

  static create ({
    id,
    fullName,
    description,
    stargazersCount,
    forks,
    openIssues,
    ownerId,
    ownerAvatarUrl,
    releasesUrl
  }: RepositoryModel): RepositoryModel {
    const release = `${releasesUrl.split('{')[0]}/latest`

    return new RepositoryModel(
      id,
      fullName,
      description,
      stargazersCount,
      forks,
      openIssues,
      ownerId,
      ownerAvatarUrl,
      release
    )
  }
}
