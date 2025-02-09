import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import config from '../config/env';

const { SECRET_KEY } = config;
const prisma = new PrismaClient();

/**
 * Sign up a new user
 */
export const signupUser = async (name: string, email: string, password: string) => {
  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error('User already exists');
  }

  // Hash the password
  const passwordHash = await bcrypt.hash(password, 10);

  // Create the user
  const user = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
      lastActiveDate: new Date(), // Set the last active date
    },
  });

  return user;
};

/**
 * Log in an existing user
 */
export const loginUser = async (email: string, password: string) => {
  // Find the user by email
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('User not found');
  }

  // Compare the password
  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  // Generate a JWT token
  const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });

  return { token, user };
};

/**
 * Get user profile
 */
export const getUserProfile = async (userId: number) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};