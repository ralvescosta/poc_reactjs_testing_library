import { RepositoryModel } from '../../../models/repositoryModel'

export interface ILikedModalViewModel {
  modalDisplay: string
  repository: RepositoryModel
  closeModal: () => void
}
