import React from 'react'
import { renderWithRedux } from '../../tests/utils/renderRedux'
import { Home } from './index'

import { TodoModel } from '../../models/TodoModel'

import { fireEvent } from '@testing-library/react'
import { RootReducer, TStore } from '../../store/rootReducers'

describe('Teste da pagina Home', () => {
  const todo1 = TodoModel.create({ name: 'todoTeste1', description: 'descrição todo 01', priority: '1' })
  const todo2 = TodoModel.create({ name: 'todoTeste2', description: 'descrição todo 02', priority: '5' })
  const todo3 = TodoModel.create({ name: 'todoTeste3', description: 'descrição todo 03', priority: '10' })

  const mockInitialState:TStore = {
    todosStore: {
      todos: [
        todo1, todo2, todo3
      ]
    }
  }
  describe('Teste de Renderização ', () => {
    const makeSut = () => {
      const sut = renderWithRedux(<Home/>, RootReducer, mockInitialState)
      return sut
    }
    it('Renderizar a tela ', async () => {
      const { queryAllByTestId } = makeSut()
      const todos = queryAllByTestId('priority')

      expect(todos.length).toBe(3)
    })

    describe('Testar comportamento dos Todos', () => {
      beforeEach(() => {
        jest.clearAllMocks()
      })
      it('Ao clicar em done o todo deve sair da tela', async () => {
        // Arrange
        const { queryAllByTestId, getAllByTestId } = makeSut()
        const todos = queryAllByTestId('button-done')

        // act
        fireEvent.click(todos[0])

        // Asserts
        const todosAposEvento = getAllByTestId('button-done')
        expect(todosAposEvento.length).toBe(2)
      })
      it('Ao clicar em delete o todo deve ser deletado', () => {
        const { queryAllByTestId, getAllByTestId } = makeSut()
        const todos = queryAllByTestId('button-delete')

        // act
        fireEvent.click(todos[0])

        // Asserts
        const todosAposEvento = getAllByTestId('button-delete')
        expect(todosAposEvento.length).toBe(1)
      })
    })
  })
})
