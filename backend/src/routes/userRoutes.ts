import express from 'express';
import { signup, login, getProfile } from '../controllers/userController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected routes
router.get('/profile/:userId', authenticate, getProfile);

export default router;