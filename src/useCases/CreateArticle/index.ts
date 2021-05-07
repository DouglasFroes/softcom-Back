import { PostgresArticleRepository } from '../../repositories/implementations/PostgresArticleRepository'
import { CreateArticleUseCase } from './CreateArticleUseCase'
import { CreateArticuleController } from './CreateArticleController'

const postgresArticleRepository = new PostgresArticleRepository()

const createArticleUseCase = new CreateArticleUseCase(postgresArticleRepository)

const createArticuleController = new CreateArticuleController(
  createArticleUseCase
)

export { createArticleUseCase, createArticuleController }
