import { Types } from './todosActions'
import { TodoModel } from '../models/TodoModel'

export type TTodoReducer = {
  todos: TodoModel[];
};
const INITIAL_STATE: TTodoReducer = {
  todos: []
}

type ActionType = {
  type: string;
  payload: any;
};

export const todosReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case Types.CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    case Types.SET_TODO:

      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id)
      if (todoIndex === -1) return state
      state.todos[todoIndex] = action.payload

      return { ...state }

    case Types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }

    default:
      return state
  }
}
