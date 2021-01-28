import { ModelErrors } from '../errors/ModelErrors'
import { TodoModel } from './TodoModel'

describe('Teste camada Model', () => {
  const fakeMockDados = {
    name: 'TodoTeste',
    description: 'descricao do Todo',
    priority: '5'
  }

  const fakeMockDadosErroNome = {
    name: 'tes',
    description: 'descricao do Todo',
    priority: '5'
  }
  it('Testar criação de instancia', () => {
    const resposta = TodoModel.create(fakeMockDados)

    expect(resposta.name).toBe(fakeMockDados.name)
    expect(resposta.description).toBe(fakeMockDados.description)
    expect(resposta.priority).toBe(parseInt(fakeMockDados.priority))
  })

  it('Testar se irá gerar um erro caso o nome estiver menor que 5 caracteres ', () => {
    expect(() => TodoModel.create(fakeMockDadosErroNome)).toThrow(ModelErrors)
  })

  it('Testar se irá gerar um erro caso o nome estiver maior que 20 caracteres ', () => {
    expect(() => TodoModel.create({
      name: 'asdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdasdasdasd',
      description: 'descricao do Todo',
      priority: '5'
    })).toThrow(ModelErrors)
  })

  it('Testar se irá gerar um erro caso a descição seja menor que 6 caracteres', () => {
    expect(() => TodoModel.create({
      name: 'TodoTeste',
      description: 'd',
      priority: '5'
    })).toThrow(ModelErrors)
  })
  it('Testar se irá gerar um erro caso a prioridade seja maior que 10 ou menor que 0', () => {
    expect(() => TodoModel.create({
      name: 'TodoTeste',
      description: 'descricao dos casos',
      priority: '11'
    })).toThrow(ModelErrors)

    expect(() => TodoModel.create({
      name: 'TodoTeste',
      description: 'descricao dos casos',
      priority: '-5'
    })).toThrow(ModelErrors)
  })
})
