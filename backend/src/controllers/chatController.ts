import { Request, Response } from 'express';
import * as chatService from '../services/chatService';

import prisma from '../prisma';

const SESSION_TTL_HOURS = 24;

interface CreateSessionOptions {
  taskId?: number;
  lessonId?: number;
}

export async function createSession(
  userId: number,
  options: CreateSessionOptions
) {
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + SESSION_TTL_HOURS);

  return await prisma.chatSession.create({
    data: {
      userId,
      taskId: options.taskId ?? null,
      lessonId: options.lessonId ?? null,
      expiresAt,
    },
  });
}

export async function postChatMessage(req: Request, res: Response) {
  try {
    const { sessionId, message } = req.body;
    const response = await chatService.postMessage(sessionId, message);
    res.json({ response });
  } catch (error) {
    res.status(400).json({ error: 'Message processing failed' });
  }
}

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
