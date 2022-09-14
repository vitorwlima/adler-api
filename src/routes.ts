import express from 'express'

export const router = express.Router()

router.get('/test', async (req, res) => {
  return res.status(200).send({ message: 'testing cool' })
})
