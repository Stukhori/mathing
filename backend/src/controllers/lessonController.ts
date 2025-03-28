import { Request, Response } from 'express';
import { getLesson, validateAnswer, getTip } from '../services/lessonService';

export const getLessonById = async (req: Request, res: Response) => {
  try {
    const lesson = await getLesson(parseInt(req.params.lessonId, 10));
    res.json(lesson ? { lesson } : { error: 'Lesson not found' });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

export const checkAnswer = async (req: Request, res: Response) => {
  try {
    const { questionId, choiceId } = req.body;
    const result = await validateAnswer(questionId, choiceId);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error instanceof Error ? error.message : 'Invalid answer' });
  }
};

export const requestTip = async (req: Request, res: Response) => {
  try {
    const tip = await getTip(req.body.questionId);
    res.json({ tip });
  } catch (error) {
    res.status(400).json({ error: error instanceof Error ? error.message : 'Tip unavailable' });
  }
};