// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/env';

const { SECRET_KEY } = config;

declare module 'express' {
  interface Request {
    userId: number;
  }
}

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {  // Only return void
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      res.status(401).json({ 
        error: 'Access denied. No token provided.',
        code: 'AUTH_REQUIRED'
      });
      return;  // Just return void after sending response
    }

    const decoded = jwt.verify(token, SECRET_KEY) as { userId: number };
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error('JWT Verification Error:', error);
    
    if (error.name === 'TokenExpiredError') {
      res.status(401).json({ 
        error: 'Session expired. Please login again.',
        code: 'TOKEN_EXPIRED',
        redirect: true
      });
      return;
    }
    
    res.status(401).json({ 
      error: 'Invalid token.',
      code: 'INVALID_TOKEN'
    });
  }
};