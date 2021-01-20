import { TodoModel } from '../models/TodoModel'

export const Types = {
  CREATE_TODO: '@todo/CREATE_TODO',
  SET_TODO: '@todo/SET_TODO',
  DELETE_TODO: '@todo/DELETE_TODO'
}

export const createTodoAction = (todo: TodoModel) => ({
  type: Types.CREATE_TODO,
  payload: todo
})

export const setTodoAction = (todo: TodoModel) => ({
  type: Types.SET_TODO,
  payload: todo
})

export const deleteTodoAction = (todo: TodoModel) => ({
  type: Types.DELETE_TODO,
  payload: todo
})
