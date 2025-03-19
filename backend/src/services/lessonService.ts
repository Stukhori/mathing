import { PrismaClient } from '@prisma/client';
import { OpenAI } from 'openai';
import config from '../config/env';

const { OPENAI_API } = config;
const prisma = new PrismaClient();

// Initialize OpenAI API
const client = new OpenAI({
  apiKey: OPENAI_API,
  organization: 'org-6DspDXuAsWqu59jIRtieUoLX',
  project: 'proj_t6RrmQQH11jzDTn65wuSeoA2',
});

/**
 * Get a lesson by ID
 */
export const getLesson = async (lessonId: number) => {
  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: { problems: { include: { solution: true } } },
  });
  return lesson;
};

/**
 * Validate a user's answer to a problem
 */
export const validateAnswer = async (
  problemId: number,
  userAnswer: string[]
) => {
  const problem = await prisma.problem.findUnique({
    where: { id: problemId },
    include: { solution: true },
  });

  if (!problem || !problem.solution) {
    throw new Error('Problem or solution not found');
  }

  // Compare user's answer with the correct solution
  const isCorrect =
    userAnswer.sort().toString() === problem.solution.roots.sort().toString();

  return { isCorrect, correctAnswer: problem.solution.roots };
};

/**
 * Get a tip from OpenAI
 */
export const getTip = async (problemId: number) => {
  const problem = await prisma.problem.findUnique({
    where: { id: problemId },
    include: { solution: true },
  });

  if (!problem || !problem.solution) {
    throw new Error('Problem or solution not found');
  }

  const prompt = `The problem is: ${problem.equation}. The discriminant is ${problem.solution.discriminant}. Provide a brief tip to help solve this quadratic equation.`;

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content:
          'You are a math tutor. You must give tips to students, so that they progress.',
      },
      { role: 'user', content: prompt },
    ],
    max_tokens: 100,
  });
  return response.choices[0].message.content.trim();
  // return response.data.choices[0].text.trim();
};
