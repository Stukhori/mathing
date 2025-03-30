import { Request, Response } from 'express';
import * as chatService from '../services/chatService';
import { createSession } from '@/services/sessionService';

export const startChat = async (req: Request, res: Response) => {
  try {
    const { taskId, lessonId } = req.body;
    const userId = req.userId; // From auth middleware

    if (!taskId && !lessonId) {
      return res.status(400).json({
        message: 'Either taskId or lessonId is required',
      });
    }

    const session = await createSession(userId, { taskId, lessonId });

    res.status(201).json({
      sessionId: session.id,
      taskId: session.taskId,
      lessonId: session.lessonId,
      expiresAt: session.expiresAt,
    });
  } catch (error) {
    console.error('Error starting chat:', error);
    res.status(500).json({ message: 'Error starting chat session' });
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
