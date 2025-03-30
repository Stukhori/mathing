import { Request, Response } from 'express';
import * as chatService from '../services/chatService';
import { createSession } from '@/services/sessionService';

export const startChat = async (req: Request, res: Response): Promise<void> => {
  try {
    const { taskId, lessonId } = req.body;
    const userId = req.userId;

    if (!taskId && !lessonId) {
      res
        .status(400)
        .json({ message: 'Either taskId or lessonId is required' });
      return;
    }

    const session = await createSession(userId, { taskId, lessonId });

    res.status(201).json({
      sessionId: session.id,
      expiresAt: session.expiresAt,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
export async function endChat(req: Request, res: Response) {
  try {
    const { sessionId } = req.body;
    await chatService.endSession(sessionId);
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: 'Failed to end session' });
  }
}

export async function getChatHistory(req: Request, res: Response) {
  try {
    const { sessionId } = req.params;
    const history = await chatService.getSessionMessages(sessionId);
    res.json(history);
  } catch (error) {
    res.status(400).json({ error: 'Failed to get chat history' });
  }
}
