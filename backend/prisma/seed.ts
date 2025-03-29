import prisma from '../src/prisma';

async function main() {
  await prisma.lesson.create({
    data: {
      title: 'Comprehensive Math Diagnostic Test',
      description: 'Assess math skills across all levels (Ages 6-18)',
      difficulty: 'ADVANCED',
      order: 8,
      questions: {
        create: [
          // Math Explorers (BEGINNER) - Questions 1-5
          {
            text: 'What is 27 + 14 - 9?',
            order: 1,
            difficulty: 'BEGINNER',
            choices: {
              create: [
                { text: '32', isCorrect: true },
                { text: '29', isCorrect: false },
                { text: '30', isCorrect: false },
                { text: '31', isCorrect: false },
              ],
            },
          },
          {
            text: 'If you have 4 boxes with 6 apples each, how many apples total?',
            order: 2,
            difficulty: 'BEGINNER',
            choices: {
              create: [
                { text: '20', isCorrect: false },
                { text: '24', isCorrect: true },
                { text: '28', isCorrect: false },
                { text: '30', isCorrect: false },
              ],
            },
          },
          {
            text: 'What is 36 ÷ 6?',
            order: 3,
            difficulty: 'BEGINNER',
            choices: {
              create: [
                { text: '4', isCorrect: false },
                { text: '5', isCorrect: false },
                { text: '6', isCorrect: true },
                { text: '7', isCorrect: false },
              ],
            },
          },
          {
            text: 'Which fraction is largest?',
            order: 4,
            difficulty: 'BEGINNER',
            choices: {
              create: [
                { text: '1/2', isCorrect: false },
                { text: '3/4', isCorrect: true },
                { text: '2/3', isCorrect: false },
                { text: '1/3', isCorrect: false },
              ],
            },
          },
          {
            text: 'How many sides does a pentagon have?',
            order: 5,
            difficulty: 'BEGINNER',
            choices: {
              create: [
                { text: '4', isCorrect: false },
                { text: '5', isCorrect: true },
                { text: '6', isCorrect: false },
                { text: '7', isCorrect: false },
              ],
            },
          },

          // Math Innovators (INTERMEDIATE) - Questions 6-10
          {
            text: 'Solve for x: 3x + 7 = 16',
            order: 6,
            difficulty: 'INTERMEDIATE',
            choices: {
              create: [
                { text: '2', isCorrect: false },
                { text: '3', isCorrect: true },
                { text: '4', isCorrect: false },
                { text: '5', isCorrect: false },
              ],
            },
          },
          {
            text: 'What is 25% of 160?',
            order: 7,
            difficulty: 'INTERMEDIATE',
            choices: {
              create: [
                { text: '30', isCorrect: false },
                { text: '40', isCorrect: true },
                { text: '50', isCorrect: false },
                { text: '60', isCorrect: false },
              ],
            },
          },
          {
            text: 'If ratio of boys:girls is 5:3 with 40 students, how many girls?',
            order: 8,
            difficulty: 'INTERMEDIATE',
            choices: {
              create: [
                { text: '10', isCorrect: false },
                { text: '15', isCorrect: true },
                { text: '20', isCorrect: false },
                { text: '25', isCorrect: false },
              ],
            },
          },
          {
            text: 'What is 2⁵?',
            order: 9,
            difficulty: 'INTERMEDIATE',
            choices: {
              create: [
                { text: '10', isCorrect: false },
                { text: '16', isCorrect: false },
                { text: '25', isCorrect: false },
                { text: '32', isCorrect: true },
              ],
            },
          },
          {
            text: 'Triangle angles 50° and 60°, what is third angle?',
            order: 10,
            difficulty: 'INTERMEDIATE',
            choices: {
              create: [
                { text: '60°', isCorrect: false },
                { text: '70°', isCorrect: true },
                { text: '80°', isCorrect: false },
                { text: '90°', isCorrect: false },
              ],
            },
          },

          // Math Masters (ADVANCED) - Questions 11-15
          {
            text: 'Solve x² - 5x + 6 = 0',
            order: 11,
            difficulty: 'ADVANCED',
            choices: {
              create: [
                { text: 'x = 2, x = 3', isCorrect: true },
                { text: 'x = 1, x = 6', isCorrect: false },
                { text: 'x = -2, x = -3', isCorrect: false },
                { text: 'x = 4, x = 5', isCorrect: false },
              ],
            },
          },
          {
            text: 'Solve log₂(32) = x',
            order: 12,
            difficulty: 'ADVANCED',
            choices: {
              create: [
                { text: '3', isCorrect: false },
                { text: '4', isCorrect: false },
                { text: '5', isCorrect: true },
                { text: '6', isCorrect: false },
              ],
            },
          },
          {
            text: 'Probability of blue ball from 4 red, 3 blue, 5 green?',
            order: 13,
            difficulty: 'ADVANCED',
            choices: {
              create: [
                { text: '1/4', isCorrect: false },
                { text: '1/3', isCorrect: false },
                { text: '3/12', isCorrect: true },
                { text: '3/10', isCorrect: false },
              ],
            },
          },
          {
            text: 'If sin θ = 0.5, what is θ in degrees?',
            order: 14,
            difficulty: 'ADVANCED',
            choices: {
              create: [
                { text: '15°', isCorrect: false },
                { text: '30°', isCorrect: true },
                { text: '45°', isCorrect: false },
                { text: '60°', isCorrect: false },
              ],
            },
          },
          {
            text: 'Find d/dx (3x² + 5x - 7)',
            order: 15,
            difficulty: 'ADVANCED',
            choices: {
              create: [
                { text: '6x + 5', isCorrect: true },
                { text: '3x + 5', isCorrect: false },
                { text: '6x - 5', isCorrect: false },
                { text: '5x² + 6', isCorrect: false },
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
