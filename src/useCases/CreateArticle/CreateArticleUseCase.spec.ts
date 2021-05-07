import { expect, describe } from '@jest/globals'
import { stub } from 'sinon'
import { PostgresArticleRepository } from '../../repositories/implementations/PostgresArticleRepository'
import { CreateArticleUseCase } from './CreateArticleUseCase'
const data = {
  title: 'test',
  author: 'douglas Froes',
  text: 'very cool'
}

describe('teste user', () => {
  it('# for  should return instance', async () => {
    const postgresArticleRepository = new PostgresArticleRepository()

    stub(postgresArticleRepository, 'save').callsFake(async e => {
      return e
    })

    const createArticleUseCase = new CreateArticleUseCase(
      postgresArticleRepository
    )

    const article = await createArticleUseCase.execute(data)

    expect(article).toHaveProperty('id')
  })
})
