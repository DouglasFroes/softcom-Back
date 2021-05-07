import { getRepository } from 'typeorm'
import { Claps } from '../../entities/Claps'
import { IClapsRepository } from '../IClapsRepository'

export class PostgresClapsRepository implements IClapsRepository {
  async alreadyExists(user: string, article: string) {
    const clapsRepository = getRepository(Claps)

    const claps = await clapsRepository.findOne({
      where: {
        user,
        article
      }
    })

    return claps
  }

  async save(claps: Claps) {
    claps.total += 1
    const clapsRepository = getRepository(Claps)

    return await clapsRepository.save(claps)
  }
}
