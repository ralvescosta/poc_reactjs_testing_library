import React from 'react'
import './styles.css'

import { TodoItem } from '../../../components/TodoItem'
import { IUseHomeViewModel } from '../viewModel/homeViewModel'

export type Props = {
  viewModel: IUseHomeViewModel
}

export const HomeView = ({ viewModel }: Props) => {
  return (
    <div className="todo-list-container">
      {
        viewModel.todos.length
          ? (
              viewModel.todos.map(todo =>
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  context="Home"
                  doneButton={() => viewModel.markTodoAsDone(todo)}
                  deleteButton={() => viewModel.deleteTodo(todo)}
                />
              )
            )
          : null
      }
    </div>
  )
}
