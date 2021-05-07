import { Article } from '../../entities/Article'
import { IArticleRepository } from '../../repositories/IArticleRepository'
import { ICreateArticleRequestDTO } from './CreateArticleDTO'

export class CreateArticleUseCase {
  constructor(private articleRepository: IArticleRepository) {}
  async execute(data: ICreateArticleRequestDTO) {
    const article = new Article(data)

    return await this.articleRepository.save(article)
  }
}
