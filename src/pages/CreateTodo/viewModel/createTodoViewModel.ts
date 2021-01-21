import { useRef, FormEvent, RefObject, useState } from 'react'

import { useDispatch } from 'react-redux'

import { createTodoAction } from '../../../store/todosActions'
import { ICreateTodoUsecase } from '../useCase/createTodoUsecase'

type Props = {
  createTodoUsecase: ICreateTodoUsecase
}

export interface IUseCreateTodoViewModel {
  todoNameInputRef: RefObject<HTMLInputElement>
  todoDescriptionInputRef: RefObject<HTMLInputElement>
  priorityInputRef: RefObject<HTMLInputElement>
  createATodo: (e: FormEvent) => void,
  alert:{message:string, status:boolean}
}

export const useCreateTodoViewModel = ({ createTodoUsecase }: Props): IUseCreateTodoViewModel => {
  const dispatchActions = useDispatch()

  const todoNameInputRef = useRef<HTMLInputElement>(null)
  const todoDescriptionInputRef = useRef<HTMLInputElement>(null)
  const priorityInputRef = useRef<HTMLInputElement>(null)

  const [alert, setAlert] = useState({ message: '', status: false })
  const createATodo = (e: FormEvent): void => {
    e.preventDefault()

    const todoName = todoNameInputRef.current?.value as string
    const todoDescription = todoDescriptionInputRef.current?.value as string
    const priority = priorityInputRef.current?.value as string

    try {
      const result = createTodoUsecase.createANewTodo({ todoName, todoDescription, priority })
      if (typeof result === 'string') {
        setAlert({ message: result, status: true })
      }
      dispatchActions(createTodoAction(result))

      if (todoNameInputRef.current?.value)todoNameInputRef.current.value = ''
      if (todoDescriptionInputRef.current?.value) todoDescriptionInputRef.current.value = ''
      if (priorityInputRef.current?.value) priorityInputRef.current.value = ''

      return setAlert({ message: 'Todo Created', status: true })
    } catch (e) {
      return setAlert({ message: e, status: true })
    }
  }

  return {
    todoNameInputRef, todoDescriptionInputRef, priorityInputRef, createATodo, alert
  }
}
