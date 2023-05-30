import { z } from 'zod'

export const createPostDto = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Title is required',
    }),
    address: z.string({
      required_error: 'Content is required',
    }),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email('Not a valid email'),
  }),
})
export const loginPostDto = z.object({
  body: z.object({
    password: z.string({
      required_error: 'Title is required',
    }),

    email: z
      .string({
        required_error: 'Email is required',
      })
      .email('Not a valid email'),
  }),
})
