async function main() {
  await prisma.lesson.create({
    data: {
      title: 'Number Sequences & Patterns',
      description: 'Master basic number sequences, patterns, and counting skills',
      difficulty: 'BEGINNER',
      order: 1,
      theory: {
        create: [
          {
            title: 'Understanding Number Sequences',
            content: 'Number sequences are ordered lists of numbers that follow a specific pattern or rule. Recognizing these patterns helps us predict future numbers in the sequence.',
            order: 1,
            examples: JSON.stringify({
              'Counting by Twos': '2, 4, 6, 8, 10...',
              'Counting by Fives': '5, 10, 15, 20, 25...',
              'Simple Addition Pattern': '3, 7, 11, 15 (adding 4 each time)'
            })
          },
          {
            title: 'Identifying Patterns',
            content: 'Look for:\n1. Constant differences (adding/subtracting same amount)\n2. Changing differences (like increasing differences)\n3. Multiplication patterns\n4. Special sequences (like squares or cubes)',
            order: 2,
            examples: JSON.stringify({
              'Multiplication Pattern': '3, 9, 27, 81 (multiplying by 3)',
              'Increasing Differences': '2, 5, 10, 17 (differences: +3, +5, +7)',
              'Decreasing Pattern': '500, 450, 400, 350 (subtracting 50)'
            }),
            mediaUrl: 'https://example.com/number-patterns.png',
            mediaType: 'image'
          },
          {
            title: 'Practice Strategies',
            content: '1. Write out the sequence\n2. Calculate differences between numbers\n3. Look for multiplication/division patterns\n4. Check if differences themselves form a pattern\n5. Test your rule on the next number',
            order: 3,
            examples: JSON.stringify({
              'Example 1': 'For 3, 6, __, 12: Differences are +3, so missing number is 9',
              'Example 2': 'For 125, 150, __, 200: Differences are +25, so missing number is 175'
            })
          }
        ]
      },
      questions: {
        create: [
          {
            text: 'Count by twos: 2, 4, __, 8, 10. What number is missing?',
            order: 1,
            explanation: 'The sequence increases by 2 each time. After 4 comes 6.',
            choices: {
              create: [
                { text: '5', isCorrect: false },
                { text: '6', isCorrect: true },
                { text: '7', isCorrect: false },
                { text: '8', isCorrect: false }
              ]
            }
          },
          {
            text: 'Count by fives: 5, 10, 15, __, 25. What number is missing?',
            order: 2,
            explanation: 'The sequence increases by 5 each time. After 15 comes 20.',
            choices: {
              create: [
                { text: '16', isCorrect: false },
                { text: '18', isCorrect: false },
                { text: '20', isCorrect: true },
                { text: '22', isCorrect: false }
              ]
            }
          },
          {
            text: 'What number comes after 37?',
            order: 3,
            explanation: 'When counting normally, the number after 37 is 38.',
            choices: {
              create: [
                { text: '36', isCorrect: false },
                { text: '37', isCorrect: false },
                { text: '38', isCorrect: true },
                { text: '39', isCorrect: false }
              ]
            }
          },
          {
            text: 'What number is before 89?',
            order: 4,
            explanation: 'When counting normally, the number before 89 is 88.',
            choices: {
              create: [
                { text: '88', isCorrect: true },
                { text: '89', isCorrect: false },
                { text: '90', isCorrect: false },
                { text: '87', isCorrect: false }
              ]
            }
          },
          {
            text: 'Type the sequence backward from 20 to 15',
            order: 5,
            explanation: 'Counting backward: 20, 19, 18, 17, 16, 15',
            choices: {
              create: [
                { text: '20, 19, 18, 17, 16, 15', isCorrect: true },
                { text: '15, 16, 17, 18, 19, 20', isCorrect: false },
                { text: '20, 18, 16, 15', isCorrect: false },
                { text: '20, 15', isCorrect: false }
              ]
            }
          },
          {
            text: 'Write the numbers between 32 and 35 in order',
            order: 6,
            explanation: 'The complete sequence is 32, 33, 34, 35',
            choices: {
              create: [
                { text: '32, 33, 34, 35', isCorrect: true },
                { text: '33, 34', isCorrect: false },
                { text: '32, 34, 35', isCorrect: false },
                { text: '32, 35', isCorrect: false }
              ]
            }
          },
          {
            text: 'What is missing in this pattern? 125, 150, __, 200, 225',
            order: 7,
            explanation: 'The sequence increases by 25 each time. 150 + 25 = 175',
            choices: {
              create: [
                { text: '160', isCorrect: false },
                { text: '170', isCorrect: false },
                { text: '175', isCorrect: true },
                { text: '180', isCorrect: false }
              ]
            }
          },
          {
            text: 'Continue the sequence: 3, 9, 27, __, 243',
            order: 8,
            explanation: 'Each number is multiplied by 3. 27 × 3 = 81',
            choices: {
              create: [
                { text: '30', isCorrect: false },
                { text: '54', isCorrect: false },
                { text: '81', isCorrect: true },
                { text: '90', isCorrect: false }
              ]
            }
          },
          {
            text: 'Find the missing number: 500, 450, __, 350, 300',
            order: 9,
            explanation: 'The sequence decreases by 50 each time. 450 - 50 = 400',
            choices: {
              create: [
                { text: '400', isCorrect: true },
                { text: '425', isCorrect: false },
                { text: '375', isCorrect: false },
                { text: '350', isCorrect: false }
              ]
            }
          },
          {
            text: 'Write the next two numbers: 2, 5, 10, 17, __, __',
            order: 10,
            explanation: 'The differences increase by 2 each time (+3, +5, +7, +9, +11)',
            choices: {
              create: [
                { text: '24, 31', isCorrect: false },
                { text: '26, 37', isCorrect: true },
                { text: '25, 35', isCorrect: false },
                { text: '20, 25', isCorrect: false }
              ]
            }
          }
        ]
      }
    }
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });