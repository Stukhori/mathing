import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getDailyTaskService = async () => {
  const task = await prisma.dailyTask.findFirst();
  return task;
};

export const submitTaskService = async (userId: number, taskId: number, submittedAnswer: string) => {
  const task = await prisma.dailyTask.findUnique({ where: { id: taskId } });
  const isCorrect = submittedAnswer === task?.answer;
  await prisma.taskSubmission.create({
    data: { userId, taskId, submittedAnswer, isCorrect },
  });
  return { isCorrect };
};