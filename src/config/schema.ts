import { z } from 'zod'

const patterns = {
    email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
}

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'Email is required' })
        .refine((text) => patterns.email.test(text), {
            message: 'Email not valid',
        }),
    password: z.string().min(8, { message: 'Password is required' }),
})
