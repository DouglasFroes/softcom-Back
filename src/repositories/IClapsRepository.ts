import { Claps } from '../entities/Claps'

export interface IClapsRepository {
  alreadyExists(userId: string, articleId: string): Promise<Claps>

  save(claps: Claps): Promise<Claps>
}
