import { TodoModel } from '../../../models/TodoModel'

export class CreateTodoUsecase {
  public createANewTodo ({ todoName, todoDescription, priority }: {todoName: string, todoDescription: string, priority: string}): TodoModel {
    try {
      const todo = TodoModel.create({ name: todoName, description: todoDescription, priority })
      return todo
    } catch (err) {
      throw err.message
    }
  }
}
