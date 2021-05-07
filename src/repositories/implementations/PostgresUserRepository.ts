import { getRepository } from 'typeorm'
import { User } from '../../entities/User'
import { IUserRepository } from '../IUserRepository'

export class PostgresUserRepository implements IUserRepository {
  async findByEmail(email: string) {
    const userRepository = getRepository(User)

    return await userRepository.findOne({ where: { email } })
  }

  async save(user: User) {
    const userRepository = getRepository(User)

    return await userRepository.save(user)
  }
}
