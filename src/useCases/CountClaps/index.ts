import { PostgresClapsRepository } from '../../repositories/implementations/PostgresClapsRepository'
import { CountClapsUseCase } from './CountClapsUseCase'
import { CountClapsController } from './CountClapsController'

const postgresClapsRepository = new PostgresClapsRepository()

const countClapsUseCase = new CountClapsUseCase(postgresClapsRepository)

export const countClapsController = new CountClapsController(countClapsUseCase)
