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

    case Types.MARK_TODO_AS_DONE:
      const todoIndex1 = state.todos.findIndex(todo => todo.id === action.payload)
      if (todoIndex1 === -1) return state

      state.todos[todoIndex1].changeState({ newState: 'done' })
      return { ...state }

    case Types.MARK_TODO_AS_AWAIT:
      const todoIndex2 = state.todos.findIndex(todo => todo.id === action.payload)
      if (todoIndex2 === -1) return state

      state.todos[todoIndex2].changeState({ newState: 'await' })
      return { ...state }

    case Types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }

    default:
      return state
  }
}
