import { PrismaClient } from '@prisma/client';
import { OpenAI } from 'openai';
import config from '../config/env';

const { OPENAI_API } = config;
const prisma = new PrismaClient();
const client = new OpenAI({ apiKey: OPENAI_API });

// Updated to match new schema
export const getLesson = async (lessonId: number) => {
  return await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: {
      questions: {
        include: {
          choices: true
        },
        orderBy: { order: 'asc' }
      },
      theory: {
        orderBy: { order: 'asc' }
      }
    }
  });
};

export const validateAnswer = async (questionId: number, choiceId: number) => {
  const choice = await prisma.choice.findUnique({
    where: { id: choiceId },
    select: { isCorrect: true, questionId: true }
  });

  if (!choice || choice.questionId !== questionId) {
    throw new Error('Invalid answer submission');
  }

  const correctAnswer = await prisma.choice.findFirst({
    where: { 
      questionId,
      isCorrect: true 
    },
    select: { id: true, text: true }
  });

  return {
    isCorrect: choice.isCorrect,
    correctAnswer: correctAnswer?.text || ''
  };
};

export const getTip = async (questionId: number) => {
  const question = await prisma.question.findUnique({
    where: { id: questionId },
    select: { text: true, explanation: true }
  });

  if (!question) throw new Error('Question not found');

  const prompt = `Question: ${question.text}. ${question.explanation ? `Explanation: ${question.explanation}` : ''}
    Provide a brief tip to help solve this problem in 1-2 sentences.`;

  const response = await client.chat.completions.create({
    model: 'gpt-4',
    messages: [{
      role: 'system',
      content: 'You are a helpful math tutor. Provide a concise hint to help the student progress.'
    }, {
      role: 'user',
      content: prompt
    }],
    max_tokens: 100
  });

  return response.choices[0].message.content?.trim() || 'Here\'s a hint: Look for patterns!';
};