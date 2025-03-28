import express from 'express';
import {
  getLessonById,
  checkAnswer,
  requestTip,
} from '../controllers/lessonController';

const router = express.Router();

router.get('/:lessonId', getLessonById);
router.post('/check-answer', checkAnswer);
router.post('/request-tip', requestTip);

export default router;
