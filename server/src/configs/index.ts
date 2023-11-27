import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.string(),
  DB_URI: z.string().url(),
});

export const { PORT, DB_URI } = envSchema.parse(process.env);
