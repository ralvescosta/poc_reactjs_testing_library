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
    if (name.length < 4) {
      throw new ModelErrors('name', 'name must have at least 4 character')
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

    const uid = (`${1e7 + -1e3 + -4e3 + -8e3 + -1e11}`).replace(/[018]/g, (c: any) =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )

    return new TodoModel(uid, name, description, priorityToNumber, 'await')
  }

  public changeState ({ newState }: {newState: 'done' | 'await'}) {
    if (newState !== 'done' && newState !== 'await') {
      throw new ModelErrors('state', 'State must be a await or done')
    }
    this._state = newState
  }
}
