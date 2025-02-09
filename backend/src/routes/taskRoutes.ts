import express from 'express';
import { getDailyTask, submitTask } from '../controllers/taskController';

const router = express.Router();

router.get('/daily-task', getDailyTask);
router.post('/submit-task', submitTask);

export default router;