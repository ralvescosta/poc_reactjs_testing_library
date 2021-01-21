import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TodoItem } from './index'
import { TodoModel } from '../../models/TodoModel'

describe('Teste componente TodoItem', () => {
  const contextHome = 'Home'
  const contextDone = 'Done'

  const todoFake:TodoModel = TodoModel.create({ name: 'Todo-1', description: 'Todo de Teste', priority: '5' })
  const doneButtonMock = jest.fn()
  const deleteButtonMock = jest.fn()
  const rollButtonMock = jest.fn()

  const makeSut = (contextHome:any) => {
    const sut = render(<TodoItem context={contextHome}
      doneButton={doneButtonMock} deleteButton={deleteButtonMock}
       rollBackButton={rollButtonMock} todo={todoFake}/>)

    return sut
  }
  describe('Testes de Renderização ', () => {
    it('Renderização Home ', () => {
      const { queryByTestId } = makeSut(contextHome)

      const prioridade = queryByTestId('priority')
      const nome = queryByTestId('name')
      const descricao = queryByTestId('description')
      const doneButton = queryByTestId('button-done')
      const deleteButton = queryByTestId('button-delete')
      const rollButton = queryByTestId('button-roll')

      expect(nome).toBeTruthy()
      expect(descricao).toBeTruthy()
      expect(prioridade).toBeTruthy()
      expect(doneButton).toBeTruthy()
      expect(deleteButton).toBeTruthy()
      expect(rollButton).not.toBeTruthy()
    })

    it('Renderização Done ', () => {
      const { queryByTestId } = makeSut(contextDone)

      const prioridade = queryByTestId('priority')
      const nome = queryByTestId('name')
      const descricao = queryByTestId('description')
      const doneButton = queryByTestId('button-done')
      const deleteButton = queryByTestId('button-delete')
      const rollButton = queryByTestId('button-roll')

      expect(nome).toBeTruthy()
      expect(descricao).toBeTruthy()
      expect(prioridade).toBeTruthy()
      expect(doneButton).not.toBeTruthy()
      expect(deleteButton).toBeTruthy()
      expect(rollButton).toBeTruthy()
    })

    it('Testando se o componente renderizou os valores passados para ele', () => {
      const { getByTestId } = makeSut(contextDone)

      const prioridade = getByTestId('priority')
      const nome = getByTestId('name')
      const descricao = getByTestId('description')

      expect(nome.textContent).toBe(todoFake.name)
      expect(prioridade.textContent).toBe(`Priority: ${todoFake.priority}`)
      expect(descricao.textContent).toBe(todoFake.description)
    })

    describe('Teste de funcionalidade de botões Pagina Done', () => {
      it('teste chamada do botao deletar', () => {
        const { getByTestId } = makeSut(contextDone)

        const deleteButton = getByTestId('button-delete')
        fireEvent.click(deleteButton)

        expect(deleteButtonMock).toHaveBeenCalledTimes(1)
      })
      it('teste chamada do botao deletar', () => {
        const { getByTestId } = makeSut(contextDone)

        const rollButton = getByTestId('button-roll')
        fireEvent.click(rollButton)

        expect(rollButtonMock).toHaveBeenCalledTimes(1)
      })
    })

    describe('Teste de funcionalidade de botões Pagina Home', () => {
      it('teste chamada do botao deletar', () => {
        const { getByTestId } = makeSut(contextHome)

        const deleteButton = getByTestId('button-delete')
        fireEvent.click(deleteButton)

        expect(deleteButtonMock).toHaveBeenCalledTimes(1)
      })
      it('teste chamada do botao Done', () => {
        const { getByTestId } = makeSut(contextHome)

        const doneButton = getByTestId('button-done')
        fireEvent.click(doneButton)

        expect(doneButtonMock).toHaveBeenCalledTimes(1)
      })
    })
  })
})
