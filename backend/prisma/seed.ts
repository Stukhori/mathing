import prisma from '../src/prisma';

async function main() {
  await prisma.lesson.create({
    data: {
      title: 'Essential Subtraction',
      description:
        'Master subtraction fundamentals from basic facts to multi-digit problems',
      difficulty: 'BEGINNER',
      order: 2,
      theory: {
        create: [
          {
            title: 'Understanding Subtraction',
            content:
              "Subtraction is the process of removing objects from a collection. It answers questions like 'How many are left?' or 'What's the difference?'",
            order: 1,
            examples: JSON.stringify({
              'Basic Example': '5 apples - 2 apples = 3 apples',
              'Number Line': 'Start at 8, move back 3: 8 → 7 → 6 → 5',
            }),
          },
          {
            title: 'Borrowing/Regrouping',
            content:
              'When subtracting larger numbers, sometimes you need to borrow from the next higher place value:',
            order: 2,
            examples: JSON.stringify({
              'Example 1': '23 - 7 = 16 (Borrow 10 from tens place)',
              'Example 2': '405 - 187 = 218 (Multiple regrouping steps)',
            }),
          },
          {
            title: 'Problem Solving Strategies',
            content:
              '1. Use visual aids like number lines\n2. Check using inverse operations (addition)\n3. Break numbers into place values\n4. Estimate first to check reasonableness',
            order: 3,
            mediaUrl: 'https://example.com/subtraction-strategies.png',
            mediaType: 'image',
          },
        ],
      },
      questions: {
        create: [
          {
            text: '9 - 4 =',
            order: 1,
            choices: {
              create: [{ text: '5', isCorrect: true }],
            },
          },
          {
            text: '18 - 9 =',
            order: 2,
            choices: {
              create: [{ text: '9', isCorrect: true }],
            },
          },
          {
            text: '35 - 12 =',
            order: 3,
            choices: {
              create: [{ text: '23', isCorrect: true }],
            },
          },
          {
            text: '60 - 20 =',
            order: 4,
            choices: {
              create: [{ text: '40', isCorrect: true }],
            },
          },
          {
            text: '100 - 75 =',
            order: 5,
            choices: {
              create: [{ text: '25', isCorrect: true }],
            },
          },
          {
            text: 'A baby dinosaur is hatching, but some eggs have gone missing! There were 12 dinosaur eggs. 5 have hatched. Help count how many are left.',
            order: 6,
            explanation: '12 - 5 = 7',
            choices: {
              create: [
                { text: '6', isCorrect: false },
                { text: '8', isCorrect: false },
                { text: '7', isCorrect: true },
                { text: '5', isCorrect: false },
              ],
            },
          },
          {
            text: '9054 - 3278 =',
            order: 7,
            choices: {
              create: [
                { text: '5776', isCorrect: true },
                { text: '5686', isCorrect: false },
                { text: '5867', isCorrect: false },
                { text: '5706', isCorrect: false },
              ],
            },
          },
          {
            text: 'The school library had 5760 books. After lending out 2435 books, how many are left?',
            order: 8,
            explanation: '5760 - 2435 = 3325',
            choices: {
              create: [
                { text: '3425', isCorrect: false },
                { text: '3225', isCorrect: false },
                { text: '3325', isCorrect: true },
                { text: '3275', isCorrect: false },
              ],
            },
          },
          {
            text: '7345 - 4728 =',
            order: 9,
            choices: {
              create: [{ text: '2617', isCorrect: true }],
            },
          },
          {
            text: 'A football stadium has 12500 seats. If 7823 are occupied, how many seats are empty?',
            order: 10,
            explanation: '12500 - 7823 = 4677',
            choices: {
              create: [
                { text: '4567', isCorrect: false },
                { text: '4677', isCorrect: true },
                { text: '4727', isCorrect: false },
                { text: '4587', isCorrect: false },
              ],
            },
          },
          {
            text: 'What is 6002 - 3199?',
            order: 11,
            choices: {
              create: [
                { text: '2703', isCorrect: false },
                { text: '2903', isCorrect: false },
                { text: '2803', isCorrect: true },
                { text: '2873', isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });