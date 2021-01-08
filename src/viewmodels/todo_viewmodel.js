import { useState, useEffect } from 'react'

import { TodoModel } from '../models/todo_model'

export const useYourImagination = ({ todoController }) => {
  const [yourImagination, setYourImagination] = useState(new TodoModel('', 0))

  useEffect(() => {
    const imagination = todoController.returnDefaultTodoModel()

    setYourImagination(imagination)
  }, [])

  return yourImagination
}
