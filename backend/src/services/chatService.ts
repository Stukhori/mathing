import prisma from '../prisma';
import OpenAI from 'openai';
import config from '../config/env';
import { createSession } from './sessionService';

const { OPENAI_API } = config;
const client = new OpenAI({ apiKey: OPENAI_API });

const SYSTEM_PROMPT = `
You are a friendly math tutor helping with a problem:
{PROBLEM_DESCRIPTION}

Guidelines:
1. Explain concepts clearly
2. Never give direct answers
3. Ask probing questions
4. Use analogies when helpful
`.trim();

export async function startSession(userId: number, taskId: number) {
  const task = await prisma.dailyTask.findUnique({
    where: { id: taskId },
  });

  const session = await createSession(userId, taskId);

  return {
    id: session.id,
    initialMessage: "Hello! I'm here to help you with this math problem.",
  };
}

export async function postMessage(sessionId: string, content: string) {
  const [session, messages] = await Promise.all([
    prisma.chatSession.findUnique({
      where: { id: sessionId },
      include: { task: true },
    }),
    prisma.chatMessage.findMany({
      where: { sessionId },
      orderBy: { createdAt: 'asc' },
    }),
  ]);

  if (!session) throw new Error('Session not found');

  // Prepare conversation history for AI
  const conversation = [
    {
      role: 'system',
      content: SYSTEM_PROMPT.replace(
        '{PROBLEM_DESCRIPTION}',
        session.task.description
      ),
    },
    ...messages.map((m) => ({
      role: m.role.toLowerCase() as 'user' | 'assistant',
      content: m.content,
    })),
    { role: 'user', content },
  ];

  // Get AI response
  const completion = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: conversation as any,
    temperature: 0.7,
  });

  const aiResponse =
    completion.choices[0].message.content || "I couldn't generate a response.";

  // Save both messages
  await prisma.$transaction([
    prisma.chatMessage.create({
      data: {
        sessionId,
        content,
        role: 'USER',
      },
    }),
    prisma.chatMessage.create({
      data: {
        sessionId,
        content: aiResponse,
        role: 'ASSISTANT',
      },
    }),
    prisma.chatSession.update({
      where: { id: sessionId },
      data: { updatedAt: new Date() },
    }),
  ]);

  return aiResponse;
}

export async function endSession(sessionId: string) {
  await prisma.chatSession.update({
    where: { id: sessionId },
    data: { expiresAt: new Date() }, // Set to expire now
  });
}

export async function getSessionMessages(sessionId: string) {
  return await prisma.chatMessage.findMany({
    where: { sessionId },
    orderBy: { createdAt: 'asc' },
    select: {
      id: true,
      content: true,
      role: true,
      createdAt: true
    }
  });
}