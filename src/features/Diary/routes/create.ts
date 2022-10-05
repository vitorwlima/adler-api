import { Request, Response } from 'express'

import { PrismaDiaryRepository } from '../repository/prisma-diary'
import { CreateDiaryUseCase } from '../use-cases/create-diary'

export class DiaryCreateRoute {
  async handle (request: Request, response: Response): Promise<Response> {
    const prismaDiaryRepository = new PrismaDiaryRepository()
    const createDiaryUseCase = new CreateDiaryUseCase(prismaDiaryRepository)
    await createDiaryUseCase.execute(request.body)

    return response.status(201).end()
  }
}
