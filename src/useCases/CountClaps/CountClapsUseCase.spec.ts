import { stub } from 'sinon'
import { PostgresClapsRepository } from '../../repositories/implementations/PostgresClapsRepository'
import { CountClapsUseCase } from './CountClapsUseCase'
const data = {
  user: 'sgsddshdfsh-5343w4rs-gfdg434',
  article: 'sgsddshd545-5343w4rs-gfdg434'
}
const data2 = {
  id: 'sgsddshdfsh-5343w4rs-gfdg434',
  total: 3
}

describe('teste user', () => {
  it('create new count claps', async () => {
    const repoFake = new PostgresClapsRepository()
    stub(repoFake, 'alreadyExists').callsFake(async () => {
      return false as any
    })

    stub(repoFake, 'save').callsFake(async e => {
      e.total += 1
      return e
    })

    const countClapsUseCase = new CountClapsUseCase(repoFake)

    const claps = await countClapsUseCase.execute(data)

    expect(claps).toHaveProperty('id')
    expect(claps.total).toEqual(1)
  })

  it('should count claps', async () => {
    const repoFake = new PostgresClapsRepository()

    stub(repoFake, 'save').callsFake(async e => {
      e.total += 1
      return e
    })

    stub(repoFake, 'alreadyExists').callsFake(async e => {
      return data2 as any
    })

    const countClapsUseCase = new CountClapsUseCase(repoFake)

    const claps = await countClapsUseCase.execute(data)

    expect(claps).toHaveProperty('id')
    expect(claps.total).toEqual(4)
  })
})
