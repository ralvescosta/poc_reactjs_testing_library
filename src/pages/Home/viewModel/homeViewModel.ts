import { useDispatch, useSelector } from 'react-redux'

import { TodoModel } from '../../../models/TodoModel'

import { setTodoAction, deleteTodoAction } from '../../../store/todosActions'
import { TStore } from '../../../store/rootReducers'

import { IHomeUsecase } from '../useCase/homeUsecase'

type Props = {
  homeUsecase: IHomeUsecase
}

export interface IUseHomeViewModel {
  todos: TodoModel[]
  markTodoAsDone: (todo: TodoModel) => void
  deleteTodo: (todo: TodoModel) => void
}

export const useHomeViewModel = ({ homeUsecase }: Props): IUseHomeViewModel => {
  const dispatchActions = useDispatch()
  const todos = useSelector((store: TStore) => store.todosStore.todos.filter((todo: TodoModel) => todo.state === 'await'))

  const markTodoAsDone = (todo: TodoModel) => {
    const newTodo = homeUsecase.markTodoAsDone(todo)

    dispatchActions(setTodoAction(newTodo))
  }

  const deleteTodo = (todo: TodoModel) => {
    dispatchActions(deleteTodoAction(todo))
  }

  return { todos, markTodoAsDone, deleteTodo }
}
