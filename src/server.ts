import express from 'express'
import 'express-async-errors'

import { handleErrorMiddleware } from './error-handler'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)
app.use(handleErrorMiddleware)

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT!} 🚀`))
