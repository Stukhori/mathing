// src/config/env.ts
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL, PORT, SECRET_KEY, OPENAI_API_KEY } = process.env;

if (!DATABASE_URL || !SECRET_KEY || !OPENAI_API_KEY) {
  throw new Error('Missing required environment variables');
}

export default {
  DATABASE_URL,
  PORT: PORT ? parseInt(PORT, 10) : 3000, // Ensure PORT is a number
  SECRET_KEY,
  OPENAI_API_KEY,
};