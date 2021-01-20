import { Types } from './todosActions'
import { TodoModel } from '../models/TodoModel'

type TState = {
  todos: TodoModel[];
};
const INITIAL_STATE: TState = {
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

    default:
      return state
  }
}