import { TodoModel } from '../models/TodoModel'

export const Types = {
  CREATE_TODO: '@todo/CREATE_TODO',
  MARK_TODO_AS_DONE: '@todo/MARK_TODO_AS_DONE'
}

export const createTodoAction = (todo: TodoModel) => ({
  type: Types.CREATE_TODO,
  payload: todo
})

export const markTodoAsDone = (id: string) => ({
  type: Types.MARK_TODO_AS_DONE,
  payload: id
})
