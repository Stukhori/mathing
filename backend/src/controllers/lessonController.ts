import { Request, Response } from 'express';
import { getLesson, validateAnswer, getTip } from '../services/lessonService';

/**
 * Get a lesson by ID
 */
export const getLessonById = async (req: Request, res: Response) => {
  try {
    const lessonId = parseInt(req.params.lessonId, 10);
    const lesson = await getLesson(lessonId);
    res.status(200).json({ lesson });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Validate a user's answer to a problem
 */
export const checkAnswer = async (req: Request, res: Response) => {
  try {
    const { problemId, userAnswer } = req.body;
    const result = await validateAnswer(problemId, userAnswer);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Get a tip for a problem
 */
export const requestTip = async (req: Request, res: Response) => {
  try {
    const { problemId } = req.body;
    const tip = await getTip(problemId);
    res.status(200).json({ tip });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};