import React from 'react'
import './styles.css'

import { useSelector } from 'react-redux'
import { TStore } from '../../../store/rootReducers'

import { TodoItem } from '../../../components/TodoItem'
import { TodoModel } from '../../../models/TodoModel'
import { IUseDoneViewModel } from '../viewModel/doneViewModel'

export type Props = {
  viewModel: IUseDoneViewModel
}

export const DoneView = ({ viewModel }: Props) => {
  const todos = useSelector((store: TStore) => store.todosStore.todos.filter((todo: TodoModel) => todo.state === 'done'))
  return (
    <div className="todo-done-list-container">
      {
        todos.length
          ? (
              todos.map(todo =>
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  context="Done"
                  deleteButton={() => viewModel.deleteTodo(todo)}
                  rollBackButton={() => viewModel.rollBack(todo)}
                />
              )
            )
          : null
      }
    </div>
  )
}
