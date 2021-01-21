import { useDispatch, useSelector } from 'react-redux'
import { TodoModel } from '../../../models/TodoModel'
import { TStore } from '../../../store/rootReducers'
import { deleteTodoAction, setTodoAction } from '../../../store/todosActions'
import { IDoneUsecase } from '../useCase/doneUsecase'

type Props = {
  doneUsecase: IDoneUsecase
}

export interface IUseDoneViewModel {
  todos: TodoModel[]
  rollBack: (todo: TodoModel) => void
  deleteTodo: (todo: TodoModel) => void
}

export const useDoneViewModel = ({ doneUsecase }: Props): IUseDoneViewModel => {
  const dispatchActions = useDispatch()
  const todos = useSelector((store: TStore) => store.todosStore.todos.filter((todo: TodoModel) => todo.state === 'done'))

  const rollBack = (todo: TodoModel): void => {
    const newTodo = doneUsecase.markTodoAsAwait(todo)

    dispatchActions(setTodoAction(newTodo))
  }

  const deleteTodo = (todo: TodoModel): void => {
    dispatchActions(deleteTodoAction(todo))
  }

  return { todos, rollBack, deleteTodo }
}
