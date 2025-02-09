import { Request, Response } from 'express';
import { getDailyTaskService, submitTaskService } from '../services/taskService';

export const getDailyTask = async (req: Request, res: Response) => {
  const task = await getDailyTaskService();
  res.json({ task });
};

export const submitTask = async (req: Request, res: Response) => {
  const { userId, taskId, submittedAnswer } = req.body;
  const result = await submitTaskService(userId, taskId, submittedAnswer);
  res.json({ result });
};