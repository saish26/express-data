import { Router } from 'express'
import { deleteUser, getUsers, postUsers } from '../controllers/user.controller'
import { validate } from '../utils/validate'
import { createPostDto } from '../validator/user.validator'

const router = Router()

router.get('/', getUsers)
router.post('/', validate(createPostDto), postUsers)
router.delete('/:id', deleteUser)

export default router
