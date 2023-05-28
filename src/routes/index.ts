import { Router } from 'express'
import useRoutes from './user.route'
import { Prisma } from '@prisma/client'

const router = Router()

router.use('/users', useRoutes)

export default router
