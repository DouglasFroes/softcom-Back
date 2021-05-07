import { Request, Response } from 'express'
import { CreateArticleUseCase } from './CreateArticleUseCase'

export class CreateArticuleController {
  constructor(private createArticleUseCase: CreateArticleUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, author, text } = request.body

    try {
      const article = await this.createArticleUseCase.execute({
        title,
        author,
        text
      })

      return response.status(201).json(article)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'erro!!!'
      })
    }
  }
}
