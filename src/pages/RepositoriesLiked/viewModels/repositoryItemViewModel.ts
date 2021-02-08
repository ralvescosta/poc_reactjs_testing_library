import { RepositoryModel } from '../../../models/repositoryModel'

import { IRepositoryItemViewModel } from '../interfaces/irepositoryItemViewModel'

type Props = {
  repository: RepositoryModel
}

export const useRepositoryItemModalViewModel = ({ repository }: Props): IRepositoryItemViewModel => {
  return { repository }
}
