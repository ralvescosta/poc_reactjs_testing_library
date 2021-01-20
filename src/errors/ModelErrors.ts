export class ModelErrors extends Error {
  constructor (
    public readonly property: string,
    public readonly message: string,
    ) {
    super(message)
    this.name = 'ModelErrors'
  }
}