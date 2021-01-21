import React from 'react'
import { fireEvent } from '@testing-library/react'
import { CreateTodo } from '../index'
import { renderWithRedux } from '../../../tests/utils/renderRedux'
import { todosReducer, TTodoReducer } from '../../../store/todosReducer'
import '@testing-library/jest-dom'
const initial:TTodoReducer = {
  todos: []
}
describe('Testes componente CreateTodo', () => {
  describe('Casos de Sucesso', () => {
    it('testar se o componente irá  renderizar', () => {
      const { queryByTestId } = renderWithRedux(<CreateTodo />, todosReducer, initial)
      expect(queryByTestId('container')).toBeTruthy()
    })

    it('testar se o um Todo será criado', async () => {
      const { queryByTestId, queryByText } = renderWithRedux(<CreateTodo />, todosReducer, initial)

      const inputName:any = queryByTestId('name')
      const inputDescription:any = queryByTestId('description')
      const inputPriority:any = queryByTestId('priority')

      fireEvent.change(inputName, { target: { value: 'Todo' } })
      fireEvent.change(inputDescription, { target: { value: 'descrição' } })
      fireEvent.change(inputPriority, { target: { value: 5 } })

      fireEvent.click(queryByTestId('button')as any)

      expect(inputName.value).toBe('')
      expect(inputDescription.value).toBe('')
      expect(inputPriority.value).toBe('')
      expect(queryByText('Todo Created')).toBeTruthy()
    })
  })
  describe('Teste de validações', () => {
    it('testar validacao input Name maior que 10 caracteress', () => {
      // Arange
      const { getByTestId, queryByText } = renderWithRedux(<CreateTodo />, todosReducer, initial)

      // Act
      fireEvent.change(getByTestId('name'), { target: { value: 'Todo teste maior que 10 caracteres' } })
      fireEvent.click(getByTestId('button'))

      // Assert
      expect(queryByText('name must have at least 10 character')).toBeTruthy()
    })

    it('testar validacao input Description menor que 6 caracteres', () => {
      // Arange
      const { getByTestId, queryByText } = renderWithRedux(<CreateTodo />, todosReducer, initial)

      // Act
      fireEvent.change(getByTestId('description'), { target: { value: '123' } })
      fireEvent.click(getByTestId('button'))

      // Assert
      expect(queryByText('description must have at least 6 character')).toBeTruthy()
    })
    it('testar validacao input Prioridade maior que 10', () => {
      // Arange
      const { getByTestId, queryByText } = renderWithRedux(<CreateTodo />, todosReducer, initial)

      // Act
      fireEvent.change(getByTestId('description'), { target: { value: '11' } })
      fireEvent.click(getByTestId('button'))

      // Assert
      expect(queryByText('description must have at least 6 character')).toBeTruthy()
    })

    it('testar validacao input Prioridade é um numero', () => {
      // Arange
      const { getByTestId, queryByText } = renderWithRedux(<CreateTodo />, todosReducer, initial)

      // Act
      fireEvent.change(getByTestId('description'), { target: { value: 'palavra' } })
      fireEvent.click(getByTestId('button'))

      // Assert
      expect(queryByText('Priority must have a number')).toBeTruthy()
    })
  })
})
export default {}
