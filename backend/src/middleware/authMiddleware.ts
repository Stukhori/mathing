import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

export const authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      res.status(401).json({ error: 'Access denied. No token provided.' });
      return;
    }

    const decoded = jwt.verify(token, SECRET_KEY) as { userId: number };
    // @ts-ignore
    req.userId = decoded.userId; // ✅ Now TypeScript recognizes `userId`

    next(); // Proceed to next middleware or route handler
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};
