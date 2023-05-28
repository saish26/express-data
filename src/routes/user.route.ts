import { Router } from 'express'
import { getUsers, postUsers } from '../controllers/user.controller'

const router = Router()

router.get('/', getUsers)
router.post('/', postUsers)

export default router
