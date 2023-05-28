import { NextFunction, Request, Response } from 'express'
import { find, send } from '../services/user.service'

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await find(req.body)
    res.send(data)
  } catch (e) {
    next(e)
  }
}
export const postUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await send(req.body)
    res.send(data)
  } catch (e) {
    next(e)
  }
}
