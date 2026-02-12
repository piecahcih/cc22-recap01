import {z} from 'zod';

export const registerValidator = z.object({
    username: z.string().min(4,"Invalid username, must be at least 4 characters"),
    password: z.string().min(6,"password must be at least 6 characters"),
    email: z.email("Invalid Email"),
    phone: z.string().regex(/^[0-9]{10}$/,"Invalid number, must be at least 10 digits long"),
})