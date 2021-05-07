import { Request, Response } from 'express'
import { CountClapsUseCase } from './CountClapsUseCase'

export class CountClapsController {
  constructor(private countClapsUseCase: CountClapsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { user, article } = request.body

    try {
      const claps = await this.countClapsUseCase.execute({ user, article })

      return response.status(200).json(claps)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'erro!!!'
      })
    }
  }
}
