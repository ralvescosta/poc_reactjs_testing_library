import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import {CreateTodoView} from './index'


const createSut = () => {
  const dummy: any = {}
  const sut = render(<CreateTodoView viewModel={dummy}/>)

  return {
    sut,
    dummy
  }
}


describe('Create Todo View', () => {
  beforeEach(()=> {
    jest.clearAllMocks();
  })

  it('alguma coisa', () => {
    //arrange
    const {sut} = createSut()

    const button = sut.queryByText("Add") as HTMLElement;

    //assert
    expect(button).toBeTruthy()
  })
})


export default {}