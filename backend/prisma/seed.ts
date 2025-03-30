import prisma from '../src/prisma';

async function main() {
  await prisma.lesson.create({
    data: {
      title: 'Essential Addition',
      description: 'Master addition fundamentals from basic facts to multi-digit problems',
      difficulty: 'BEGINNER',
      order: 1, // Changed to 1 since subtraction was 4
      theory: {
        create: [
          {
            title: 'Understanding Addition',
            content: 'Addition is the process of combining numbers to find a total sum. It answers questions like "How many in total?" or "What is the combined amount?"',
            order: 1,
            examples: JSON.stringify({
              'Basic Example': '3 apples + 2 apples = 5 apples',
              'Number Line': 'Start at 5, move forward 4: 5 → 6 → 7 → 8 → 9'
            }),
          },
          {
            title: 'Carrying Over',
            content: 'When adding larger numbers, sometimes you need to carry over to the next higher place value:',
            order: 2,
            examples: JSON.stringify({
              'Example 1': '15 + 7 = 22 (Carry 1 to tens place)',
              'Example 2': '386 + 497 = 883 (Multiple carry-over steps)'
            }),
          },
          {
            title: 'Problem Solving Strategies',
            content: '1. Use counting objects for visualization\n2. Break numbers into tens and ones\n3. Use known facts to solve unknown problems\n4. Check using inverse operations (subtraction)',
            order: 3,
            mediaUrl: 'https://example.com/addition-strategies.png',
            mediaType: 'image',
          },
        ],
      },
      questions: {
        create: [
          {
            text: '5 + 3 =',
            order: 1,
            choices: {
              create: [{ text: '8', isCorrect: true }],
            },
          },
          {
            text: '7 + 6 =',
            order: 2,
            choices: {
              create: [{ text: '13', isCorrect: true }],
            },
          },
          {
            text: '12 + 15 =',
            order: 3,
            choices: {
              create: [{ text: '27', isCorrect: true }],
            },
          },
          {
            text: '30 + 40 =',
            order: 4,
            choices: {
              create: [{ text: '70', isCorrect: true }],
            },
          },
          {
            text: '25 + 50 =',
            order: 5,
            choices: {
              create: [{ text: '75', isCorrect: true }],
            },
          },
          {
            text: 'A farmer has 14 chickens and buys 8 more. How many chickens does he have now?',
            order: 6,
            explanation: '14 + 8 = 22',
            choices: {
              create: [
                { text: '20', isCorrect: false },
                { text: '22', isCorrect: true },
                { text: '24', isCorrect: false },
                { text: '26', isCorrect: false },
              ],
            },
          },
          {
            text: '125 + 378 =',
            order: 7,
            choices: {
              create: [
                { text: '503', isCorrect: true },
                { text: '493', isCorrect: false },
                { text: '513', isCorrect: false },
                { text: '403', isCorrect: false },
              ],
            },
          },
          {
            text: 'A bookstore sold 342 books on Monday and 459 on Tuesday. How many books were sold in total?',
            order: 8,
            explanation: '342 + 459 = 801',
            choices: {
              create: [
                { text: '791', isCorrect: false },
                { text: '801', isCorrect: true },
                { text: '811', isCorrect: false },
                { text: '701', isCorrect: false },
              ],
            },
          },
          {
            text: '625 + 789 =',
            order: 9,
            choices: {
              create: [{ text: '1414', isCorrect: true }],
            },
          },
          {
            text: 'A school has 1234 students in primary and 876 in secondary. What is the total number of students?',
            order: 10,
            explanation: '1234 + 876 = 2110',
            choices: {
              create: [
                { text: '2010', isCorrect: false },
                { text: '2110', isCorrect: true },
                { text: '2210', isCorrect: false },
                { text: '2000', isCorrect: false },
              ],
            },
          },
          {
            text: 'What is 2508 + 3997?',
            order: 11,
            choices: {
              create: [
                { text: '6405', isCorrect: false },
                { text: '6505', isCorrect: true },
                { text: '6495', isCorrect: false },
                { text: '6515', isCorrect: false },
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