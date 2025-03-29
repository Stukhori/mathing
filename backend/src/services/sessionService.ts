// src/services/sessionService.ts
import prisma from '../prisma';

const SESSION_TTL_HOURS = 24; // 24 hour expiration

export async function createSession(userId: number, taskId: number) {
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + SESSION_TTL_HOURS);

  return await prisma.chatSession.create({
    data: {
      userId,
      taskId,
      expiresAt
    }
  });
}

export async function cleanupExpiredSessions() {
  const now = new Date();
  await prisma.chatSession.deleteMany({
    where: {
      expiresAt: {
        lte: now
      }
    }
  });
}

// Run cleanup every hour
setInterval(cleanupExpiredSessions, 60 * 60 * 1000);