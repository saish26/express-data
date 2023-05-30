import { NextFunction, Request, Response } from 'express'
import { send } from '../services/auth.service'

export const Login = async (
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
