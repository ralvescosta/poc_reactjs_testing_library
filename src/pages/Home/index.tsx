import React from 'react'

import { HomeView } from './view'
import { useHomeViewModel } from './viewModel/homeViewModel'
import { HomeUsecase } from './useCase/homeUsecase'

export const Home = () => {
  const homeUsecase = new HomeUsecase()
  const homeViewModel = useHomeViewModel({ homeUsecase })

  return (
    <HomeView viewModel={homeViewModel} />
  )
}
