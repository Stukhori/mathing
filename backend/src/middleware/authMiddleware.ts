import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/env';
const {SECRET_KEY} = config;

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log('Received Token:', token); // Debugging

    if (!token) {
      res.status(401).json({ error: 'Access denied. No token provided.' });
      return;
    }

    const decoded = jwt.verify(token, SECRET_KEY) as { userId: number };
    console.log('Decoded Token:', decoded); // Debugging

    // Attach user ID to request object
    (req as any).userId = decoded.userId;

    next();
  } catch (error) {
    console.error('JWT Verification Error:', error);
    res.status(400).json({ error: 'Invalid token.' });
  }
};
