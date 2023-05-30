import Boom from '@hapi/boom'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export const login = async (email: string, password: string) => {
  const user = await prisma.user.findFirstOrThrow({ where: { email } })

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    throw Boom.badData('Password not correct')
  }

  const token = jwt.sign(
    {
      userId: user.id,
      isAdmin: true,
    },
    'random-secret',
    {
      expiresIn: '1h',
    }
  )
  return { success: true, token }
}

export const send = async (user: any) => {
  const { email, password } = user
  const users = await prisma.user.findFirst({
    where: {
      email,
      password,
    },
  })
  return users
}
