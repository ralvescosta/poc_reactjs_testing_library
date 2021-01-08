import { TodoModel } from '../models/todo_model'

export class TodoRepository {
  createDefaultModel () {
    return new TodoModel('Zezinho', 10)
  }
}
