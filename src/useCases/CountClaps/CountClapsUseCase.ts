import { Claps } from '../../entities/Claps'
import { IClapsRepository } from '../../repositories/IClapsRepository'
import { ICountClapsRequestDTO } from './CountClapsDTO'

export class CountClapsUseCase {
  constructor(private clapsRepository: IClapsRepository) {}

  async execute(data: ICountClapsRequestDTO) {
    const clapsExists = await this.clapsRepository.alreadyExists(
      data.user,
      data.article
    )

    if (clapsExists) {
      return await this.clapsRepository.save(clapsExists)
    } else {
      const clap = new Claps(data)
      return await this.clapsRepository.save(clap)
    }
  }
}
