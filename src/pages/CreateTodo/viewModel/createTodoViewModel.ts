import { useRef, FormEvent, RefObject } from 'react'

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
  createATodo: (e: FormEvent) => void
}

export const useCreateTodoViewModel = ({ createTodoUsecase }: Props): IUseCreateTodoViewModel => {
  const dispatchActions = useDispatch()

  const todoNameInputRef = useRef<HTMLInputElement>(null)
  const todoDescriptionInputRef = useRef<HTMLInputElement>(null)
  const priorityInputRef = useRef<HTMLInputElement>(null)

  const createATodo = (e: FormEvent): void => {
    e.preventDefault()

    const todoName = todoNameInputRef.current?.value as string
    const todoDescription = todoDescriptionInputRef.current?.value as string
    const priority = priorityInputRef.current?.value as string

    const result = createTodoUsecase.createANewTodo({ todoName, todoDescription, priority })

    if (typeof result === 'string') {
      return alert(result)
    }
    dispatchActions(createTodoAction(result))

    return alert('Todo Created')
  }

  return {
    todoNameInputRef, todoDescriptionInputRef, priorityInputRef, createATodo
  }
}
