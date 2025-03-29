import express from 'express';
import { getDailyTask, submitTask } from '../controllers/taskController';
import { authenticate } from '@/middleware/authMiddleware';

const router = express.Router();

router.get('/daily-task', authenticate, getDailyTask);
router.post('/submit-task', authenticate, submitTask);

export default router;