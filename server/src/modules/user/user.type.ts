import { z } from 'zod';

export const userSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name must be at least 1 character long' })
    .max(30, { message: 'Name cannot exceed 30 characters' }),
  email: z.string().email({ message: 'Invalid email format' }),
  imgUrl: z.string().url({ message: 'Invalid URL format' }),
  role: z.enum(['owner', 'renter']),
});

export type TUser = z.infer<typeof userSchema>;
