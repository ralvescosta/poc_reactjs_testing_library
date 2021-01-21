import { TodoModel } from '../../../models/TodoModel'

export interface IDoneUsecase {
  markTodoAsAwait: (todo: TodoModel) => TodoModel
}

export class DoneUsecase implements IDoneUsecase {
  public markTodoAsAwait (todo: TodoModel): TodoModel {
    todo.changeState({ newState: 'await' })
    return todo
  }
}
