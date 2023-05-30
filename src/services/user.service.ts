import Boom from '@hapi/boom'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const find = async (user: any) => {
  const users = await prisma.user.findMany()
  return users
}
export const remove = async (id: any) => {
  try {
    const users = await prisma.user.delete({
      where: {
        id,
      },
    })
    return users
  } catch (error: any) {
    if (error.code == 'P2025') {
      throw Boom.notFound('Post not Found')
    } else {
      throw error
    }
  }
}
export const send = async (user: any) => {
  const { email, name, address, password } = user
  const users = await prisma.user.create({
    data: {
      password: await bcrypt.hash(password as string, 10),
      email,
      name,
      address,
      id: Math.ceil(Math.random() * 100),
    },
  })
  return users
}
