import express from 'express';
import { signup, login, getCurrentUser } from '../controllers/userController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected routes
router.get('/me', authenticate, getCurrentUser);

export default router;