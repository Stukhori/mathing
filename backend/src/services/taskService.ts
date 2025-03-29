import prisma from '../prisma';
import { OpenAI } from 'openai';
import config from '../config/env';

const { OPENAI_API } = config;
const client = new OpenAI({ apiKey: OPENAI_API });

export const getDailyTaskService = async () => {
  const task = await prisma.dailyTask.findFirst();
  return task;
};

export const submitTaskService = async (
  userId: number,
  taskId: number,
  submittedAnswer: string
) => {
  // First get the task with its question text and answer
  const task = await prisma.dailyTask.findUnique({
    where: { id: taskId },
  });

  if (!task) {
    throw new Error('Task not found');
  }

  // Prepare the prompt for OpenAI using the task's question and answer
  const prompt = `
    You are a math tutor evaluating a student's answer. Be encouraging but precise.
    
    Question: ${task.description}
    Correct answer: ${task.answer}
    Student's answer: ${submittedAnswer}

    Evaluate if the student's answer is correct. Consider:
    1. The mathematical correctness
    2. The logical reasoning
    3. The completeness of the answer

    If the answer is correct, respond with "Correct! " followed by brief positive feedback.
    If incorrect, respond with "Incorrect. " followed by a clear explanation of why it's wrong.
    Keep your response concise (1-2 sentences if correct, 2-3 sentences if wrong).
  `;

  // Call OpenAI API
  const completion = await client.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4o-mini',
    temperature: 0.3,
    max_tokens: 150,
  });
  const aiResponse =
    completion.choices[0]?.message?.content || 'Could not evaluate answer';
  const isCorrect = aiResponse.toLowerCase().startsWith('correct');

  // Save the submission
  await prisma.taskSubmission.create({
    data: {
      userId,
      taskId,
      submittedAnswer,
      isCorrect,
      aiFeedback: aiResponse,
    },
  });

  return {
    isCorrect,
    feedback: aiResponse,
  };
};
