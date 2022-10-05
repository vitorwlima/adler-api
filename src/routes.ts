import express from 'express'
import { diaryRouter } from './features/Diary/routes'

export const router = express.Router()

router.use('/diary', diaryRouter)

router.get('/test', async (req, res) => {
  return res.status(200).send({ message: 'testing cool' })
})
