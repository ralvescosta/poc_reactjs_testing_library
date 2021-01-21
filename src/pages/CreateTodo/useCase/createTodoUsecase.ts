import { TodoModel } from '../../../models/TodoModel'

export interface ICreateTodoUsecase {
  createANewTodo: ({ todoName, todoDescription, priority }: {todoName: string, todoDescription: string, priority: string}) => TodoModel
}

export class CreateTodoUsecase implements ICreateTodoUsecase {
  public createANewTodo ({ todoName, todoDescription, priority }: {todoName: string, todoDescription: string, priority: string}): TodoModel {
    try {
      const todo = TodoModel.create({ name: todoName, description: todoDescription, priority })
      return todo
    } catch (err) {
      return err.message
    }
  }
}
