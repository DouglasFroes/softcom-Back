import { Article } from '../entities/Article'

interface Repo<T> {
  exists(t: T): Promise<boolean>
  delete(t: T): Promise<any>
  save(t: T): Promise<any>
}

export interface IArticleRepository {
  getAll(id: string): Promise<Article[]>
  findById(id: string): Promise<Article>

  save(article: Article): Promise<Article>
}
