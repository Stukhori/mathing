import express from 'express';
import {
  startChat,
  postChatMessage,
  endChat,
  getChatHistory,
} from '../controllers/chatController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * /chat/sessions:
 *   post:
 *     summary: Start a new chat session
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               taskId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Chat session created
 */
router.post('/sessions', authenticate, startChat);

/**
 * @swagger
 * /chat/messages:
 *   post:
 *     summary: Send a chat message
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sessionId:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Message processed
 */
router.post('/messages', authenticate, postChatMessage);

/**
 * @swagger
 * /chat/sessions:
 *   delete:
 *     summary: End a chat session
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sessionId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Session ended
 */
router.delete('/sessions', authenticate, endChat);

/**
 * @swagger
 * /chat/sessions/{sessionId}/history:
 *   get:
 *     summary: Get chat history
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Chat history retrieved
 */
router.get('/sessions/:sessionId/history', authenticate, getChatHistory);

export default router;
