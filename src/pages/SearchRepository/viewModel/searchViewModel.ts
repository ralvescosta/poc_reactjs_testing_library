import { useRef } from 'react'
import { ISearchUsecase } from '../interfaces/isearchUseace'
import { ISearchViewModel } from '../interfaces/isearchViewModel'

type Props = {
  searchUsecase: ISearchUsecase
}

export const useSearchViewModel = ({ searchUsecase }: Props): ISearchViewModel => {
  const searchInputRef = useRef<HTMLInputElement>(null)

  return { searchInputRef }
}
