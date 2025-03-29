import { Request, Response } from 'express';
import * as chatService from '../services/chatService';

export async function startChat(req: Request, res: Response) {
  try {
    const { taskId } = req.body;
    const result = await chatService.startSession(req.userId, taskId);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: 'Failed to start session' });
  }
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