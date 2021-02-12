import { RefObject } from 'react'
import { RepositoryModel } from '../../../models/repositoryModel'

export interface ISearchViewModel {
  searchInputRef: RefObject<HTMLInputElement>
  btnText: string
  repositories: RepositoryModel[]
  search: () => void
  errorMenssage:boolean
}
