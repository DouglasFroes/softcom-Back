import { User } from '../../entities/User'
import { IUserRepository } from '../../repositories/IUserRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userExists = await this.userRepository.findByEmail(data.email)

    if (userExists) {
      throw new Error('User Already Exists.')
    }

    const user = new User(data)

    return await this.userRepository.save(user)
  }
}
