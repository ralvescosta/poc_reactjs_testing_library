import { TodoModel } from '../../../models/TodoModel'

export interface IHomeUsecase {
  markTodoAsDone: (todo: TodoModel) => TodoModel
}

export class HomeUsecase implements IHomeUsecase {
  public markTodoAsDone (todo: TodoModel): TodoModel {
    todo.changeState({ newState: 'done' })
    return todo
  }
}
