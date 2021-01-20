import { TodoModel } from '../models/TodoModel'

export const Types = {
  CREATE_TODO: '@todo/CREATE_TODO'
}

export const createTodoAction = (todo: TodoModel) => ({
  type: Types.CREATE_TODO,
  payload: todo
})
