import { Router } from 'express'
import { DiaryCreateRoute } from './create'

export const diaryRouter = Router()

diaryRouter.post('/', async (request, response) => {
  const diaryCreateRoute = new DiaryCreateRoute()
  return await diaryCreateRoute.handle(request, response)
})
