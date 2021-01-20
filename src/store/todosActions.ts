import { TodoModel } from '../models/TodoModel'

export const Types = {
  CREATE_TODO: '@todo/CREATE_TODO',
  MARK_TODO_AS_DONE: '@todo/MARK_TODO_AS_DONE',
  MARK_TODO_AS_AWAIT: '@todo/MARK_TODO_AS_AWAIT',
  DELETE_TODO: '@todo/DELETE_TODO'
}

export const createTodoAction = (todo: TodoModel) => ({
  type: Types.CREATE_TODO,
  payload: todo
})

export const markTodoAsDoneAction = (id: string) => ({
  type: Types.MARK_TODO_AS_DONE,
  payload: id
})

export const markTodoAsAwaitAction = (id: string) => ({
  type: Types.MARK_TODO_AS_AWAIT,
  payload: id
})

export const deleteTodoAction = (id: string) => ({
  type: Types.DELETE_TODO,
  payload: id
})
