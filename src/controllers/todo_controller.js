export class TodoController {
  constructor (todoRepository) {
    this._todoRepository = todoRepository
  }

  returnDefaultTodoModel () {
    return this._todoRepository.createDefaultModel()
  }
}
