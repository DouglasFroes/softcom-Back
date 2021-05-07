import { getRepository } from 'typeorm'
import { Article } from '../../entities/Article'
import { IArticleRepository } from '../IArticleRepository'

export class PostgresArticleRepository implements IArticleRepository {
  async findById(id: string) {
    const articleRepository = getRepository(Article)

    return await articleRepository.findOneOrFail(id)
  }

  async getAll() {
    const articleRepository = getRepository(Article)

    return await articleRepository.find()
  }

  async save(article: Article) {
    const articleRepository = getRepository(Article)

    return await articleRepository.save(article)
  }
}
