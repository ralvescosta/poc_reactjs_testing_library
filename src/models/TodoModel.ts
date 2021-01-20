import { ModelErrors } from '../errors/ModelErrors'

export class TodoModel {
  private constructor (
    public readonly todoName: string,
    public readonly todoDescription: string,
    public readonly priority: number
  ) {}

  public static create ({ todoName, todoDescription, priority }: {todoName: string, todoDescription: string, priority: string}): TodoModel {
    if (todoName.length < 4) {
      throw new ModelErrors('todoName', 'TodoName must have at least 4 character')
    }
    if (todoName.length >= 20) {
      throw new ModelErrors('todoName', 'TodoName must have at maximum 20 character')
    }

    if (todoDescription.length < 6) {
      throw new ModelErrors('todoDescription', 'TodoDescription must have at least 6 character')
    }

    const priorityToNumber = Number(priority)
    if (!priorityToNumber || isNaN(priorityToNumber)) {
      throw new ModelErrors('priority', 'Priority must have a number')
    }
    if (priorityToNumber > 10) {
      throw new ModelErrors('priority', 'Priority must have least then 10')
    }

    return new TodoModel(todoName, todoDescription, priorityToNumber)
  }
}
