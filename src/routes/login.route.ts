import { Router } from 'express'
import { validate } from '../utils/validate'
import { loginPostDto } from '../validator/user.validator'
import { Login } from '../controllers/login.controller'

const router = Router()

router.post('/login', validate(loginPostDto), Login)

export default router
