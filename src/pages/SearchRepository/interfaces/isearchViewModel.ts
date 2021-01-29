import { RefObject } from 'react'

export interface ISearchViewModel {
  searchInputRef: RefObject<HTMLInputElement>
  search: () => void
}
