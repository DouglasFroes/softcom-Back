import { stub } from 'sinon'
import { PostgresUserRepository } from '../../repositories/implementations/PostgresUserRepository'
import { CreateUserUseCase } from './createUserUseCase'

const data = {
  name: 'douglas froes',
  email: 'douglas@gmail.com'
}

describe('teste user', () => {
  it('create new user', async () => {
    const repoFake = new PostgresUserRepository()

    stub(repoFake, 'save').callsFake(async e => {
      return e
    })
    stub(repoFake, 'findByEmail').callsFake(async e => {
      return false as any
    })

    const createUserUseCase = new CreateUserUseCase(repoFake)

    const user = await createUserUseCase.execute(data)

    expect(user).toHaveProperty('id')
    expect(user.name).toEqual(data.name)
    expect(user.email).toEqual(data.email)
  })
})
