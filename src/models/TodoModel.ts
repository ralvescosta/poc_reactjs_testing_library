import { ModelErrors } from '../errors/ModelErrors'

export class TodoModel {
  private constructor (
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly priority: number,
    private _state: string
  ) {}

  get state (): string {
    return this._state
  }

  public static create ({ name, description, priority }: {name: string, description: string, priority: string}): TodoModel {
    if (name.length >= 10) {
      throw new ModelErrors('name', 'name must have at least 10 character')
    }

    if (name.length >= 20) {
      throw new ModelErrors('name', 'name must have at maximum 20 character')
    }

    if (description.length < 6) {
      throw new ModelErrors('description', 'description must have at least 6 character')
    }

    const priorityToNumber = Number(priority)
    if (!priorityToNumber || isNaN(priorityToNumber)) {
      throw new ModelErrors('priority', 'Priority must have a number')
    }
    if (priorityToNumber > 10) {
      throw new ModelErrors('priority', 'Priority must have least then 10')
    }

    // StackOverflow na Veia
    const uid = Math.floor(Math.random() * 99999999999).toString()

    return new TodoModel(uid, name, description, priorityToNumber, 'await')
  }

  public changeState ({ newState }: {newState: 'done' | 'await'}) {
    if (newState !== 'done' && newState !== 'await') {
      throw new ModelErrors('state', 'State must be a await or done')
    }
    this._state = newState
  }
}
