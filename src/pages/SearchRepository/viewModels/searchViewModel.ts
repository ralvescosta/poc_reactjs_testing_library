import { useRef, useState } from 'react'
import { RepositoryModel } from '../../../models/repositoryModel'
import { ISearchUsecase } from '../interfaces/isearchUseace'
import { ISearchViewModel } from '../interfaces/isearchViewModel'

type Props = {
  searchUsecase: ISearchUsecase
}

export const useSearchViewModel = ({ searchUsecase }: Props): ISearchViewModel => {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [repositories, setRepositories] = useState<RepositoryModel[]>([])
  const [btnText, setBtnText] = useState('BUSCAR')
  const [errorMenssage, setErroMenssage] = useState(false)
  const search = async () => {
    setErroMenssage(false)
    const githubRepository = searchInputRef.current?.value

    if (!githubRepository) {
      return setErroMenssage(true)
    }

    setBtnText('CARREGANDO...')

    const result = await searchUsecase.search(githubRepository)

    setRepositories(result)
    setBtnText('BUSCAR')
    if (searchInputRef.current?.value) searchInputRef.current.value = ''
  }

  return { searchInputRef, btnText, repositories, search, errorMenssage }
}
