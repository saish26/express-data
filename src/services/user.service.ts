import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const find = async (user: any) => {
  const users = await prisma.user.findMany()
  return users
}
export const send = async (user: any) => {
  const { email, name, address } = user
  const users = await prisma.user.create({
    data: {
      email,
      name,
      address,
      id: Math.ceil(Math.random() * 100),
    },
  })
  return users
}
