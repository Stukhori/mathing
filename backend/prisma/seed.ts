import prisma from '../src/prisma';

async function main() {
  await prisma.lesson.create({
    data: {
      title: 'Fractions, Decimals & Percentages',
      description: 'Master conversion between fractions, decimals and percentages, operations, and real-life applications',
      difficulty: 'INTERMEDIATE',
      order: 5,
      theory: {
        create: [
          {
            title: 'Understanding the Relationships',
            content: 'Fractions, decimals, and percentages are different ways to represent the same value. Being able to convert between them is essential for solving real-world problems.',
            order: 1,
            examples: JSON.stringify({
              'Basic Conversions': '1/2 = 0.5 = 50%',
              'Fraction to Decimal': 'Divide numerator by denominator (3/4 = 3 ÷ 4 = 0.75)',
              'Decimal to Percentage': 'Multiply by 100 (0.35 = 35%)'
            }),
            mediaUrl: 'https://example.com/conversion-chart.png',
            mediaType: 'image'
          },
          {
            title: 'Operations with Fractions',
            content: 'When adding/subtracting fractions, find a common denominator. For multiplication, multiply numerators and denominators. Division is the same as multiplying by the reciprocal.',
            order: 2,
            examples: JSON.stringify({
              'Addition': '1/4 + 1/3 = 3/12 + 4/12 = 7/12',
              'Multiplication': '2/3 × 3/5 = 6/15 = 2/5',
              'Division': '4/9 ÷ 2/3 = 4/9 × 3/2 = 12/18 = 2/3'
            })
          },
          {
            title: 'Percentage Applications',
            content: 'Percentages are used for discounts, tips, interest rates, and more. Key formulas:\n1. Percentage of a number: (percentage/100) × number\n2. Percentage change: (new-old)/old × 100%',
            order: 3,
            examples: JSON.stringify({
              'Discount': '25% off $80 = 0.25 × 80 = $20 discount',
              'Tip Calculation': '18% tip on $50 = 0.18 × 50 = $9',
              'Percentage Increase': 'From 40 to 46 = (46-40)/40 × 100% = 15% increase'
            })
          }
        ]
      },
      questions: {
        create: [
          {
            text: 'A jacket costs $120, and there is a 25% discount. What is the new price?',
            order: 1,
            explanation: '25% of $120 is $30 (120 × 0.25). New price = $120 - $30 = $90',
            choices: {
              create: [
                { text: '$90', isCorrect: true },
                { text: '$80', isCorrect: false },
                { text: '$100', isCorrect: false },
                { text: '$85', isCorrect: false }
              ]
            }
          },
          {
            text: 'A store is offering "Buy 3, get 1 free". If each item costs $15, what is the average price per item with the deal?',
            order: 2,
            explanation: 'Total cost = 3 × $15 = $45 for 4 items. Average price = $45 ÷ 4 = $11.25',
            choices: {
              create: [
                { text: '$10', isCorrect: false },
                { text: '$11.25', isCorrect: true },
                { text: '$12', isCorrect: false },
                { text: '$9', isCorrect: false }
              ]
            }
          },
          {
            text: 'A restaurant bill is $64.50. You tip 18%. How much is the total bill?',
            order: 3,
            explanation: 'Tip amount = $64.50 × 0.18 = $11.61. Total = $64.50 + $11.61 = $76.11',
            choices: {
              create: [
                { text: '$70.00', isCorrect: false },
                { text: '$75.25', isCorrect: false },
                { text: '$76.11', isCorrect: true },
                { text: '$72.50', isCorrect: false }
              ]
            }
          },
          {
            text: 'A product originally priced at $80 is now $56. What percentage was the price reduced by?',
            order: 4,
            explanation: 'Reduction = $80 - $56 = $24. Percentage = (24/80) × 100% = 30%',
            choices: {
              create: [
                { text: '25%', isCorrect: false },
                { text: '28%', isCorrect: false },
                { text: '30%', isCorrect: true },
                { text: '35%', isCorrect: false }
              ]
            }
          },
          {
            text: 'Solve: ⅘ + ⅜ (Express in simplest form)',
            order: 5,
            explanation: 'LCD = 40. 4/5 = 32/40, 3/8 = 15/40. Sum = 47/40',
            choices: {
              create: [
                { text: '47/40', isCorrect: true },
                { text: '29/40', isCorrect: false },
                { text: '33/40', isCorrect: false },
                { text: '35/40', isCorrect: false }
              ]
            }
          },
          {
            text: 'Subtract 9/11 - 4/7',
            order: 6,
            explanation: 'LCD = 77. 9/11 = 63/77, 4/7 = 44/77. Difference = 19/77',
            choices: {
              create: [
                { text: '17/77', isCorrect: false },
                { text: '19/77', isCorrect: true },
                { text: '25/77', isCorrect: false },
                { text: '21/77', isCorrect: false }
              ]
            }
          },
          {
            text: 'Multiply 1.25 × 3.6',
            order: 7,
            explanation: '125 × 36 = 4500. Total decimal places = 3. Result = 4.500 = 4.50',
            choices: {
              create: [
                { text: '3.75', isCorrect: false },
                { text: '4.25', isCorrect: false },
                { text: '4.50', isCorrect: true },
                { text: '4.80', isCorrect: false }
              ]
            }
          },
          {
            text: 'Divide 4/9 ÷ 2/3',
            order: 8,
            explanation: 'Same as 4/9 × 3/2 = 12/18 = 2/3',
            choices: {
              create: [
                { text: '2/3', isCorrect: true },
                { text: '3/4', isCorrect: false },
                { text: '4/7', isCorrect: false },
                { text: '5/9', isCorrect: false }
              ]
            }
          },
          {
            text: 'Find ⅔ of 540',
            order: 9,
            explanation: '540 × (2/3) = 1080/3 = 360',
            choices: {
              create: [
                { text: '320', isCorrect: false },
                { text: '360', isCorrect: true },
                { text: '380', isCorrect: false },
                { text: '400', isCorrect: false }
              ]
            }
          },
          {
            text: 'Decrease 920 by 35%',
            order: 10,
            explanation: '35% of 920 = 322. New value = 920 - 322 = 598',
            choices: {
              create: [
                { text: '580', isCorrect: false },
                { text: '598', isCorrect: true },
                { text: '620', isCorrect: false },
                { text: '640', isCorrect: false }
              ]
            }
          },
          {
            text: 'Convert 3/8 to a decimal',
            order: 11,
            explanation: '3 ÷ 8 = 0.375',
            choices: {
              create: [
                { text: '0.375', isCorrect: true },
                { text: '0.475', isCorrect: false },
                { text: '0.425', isCorrect: false },
                { text: '0.325', isCorrect: false }
              ]
            }
          },
          {
            text: 'Convert 7/12 into a decimal (round to 3 decimal places)',
            order: 12,
            explanation: '7 ÷ 12 ≈ 0.5833... → 0.583',
            choices: {
              create: [
                { text: '0.584', isCorrect: false },
                { text: '0.583', isCorrect: true },
                { text: '0.582', isCorrect: false },
                { text: '0.625', isCorrect: false }
              ]
            }
          },
          {
            text: 'Convert 1.75 to a mixed fraction',
            order: 13,
            explanation: '0.75 = 3/4. Whole number is 1. Result = 1¾',
            choices: {
              create: [
                { text: '1 4/5', isCorrect: false },
                { text: '1 3/5', isCorrect: false },
                { text: '1 3/4', isCorrect: true },
                { text: '1 ⅖', isCorrect: false }
              ]
            }
          },
          {
            text: 'A student scored 85% on a test of 120 points. How many points did the student get incorrect?',
            order: 14,
            explanation: '85% correct = 102 points. Incorrect = 120 - 102 = 18',
            choices: {
              create: [
                { text: '12', isCorrect: false },
                { text: '18', isCorrect: true },
                { text: '20', isCorrect: false },
                { text: '15', isCorrect: false }
              ]
            }
          },
          {
            text: 'The school had 640 students last year and now has 720. What is the percentage increase?',
            order: 15,
            explanation: 'Increase = 80 students. Percentage = (80/640) × 100% = 12.5%',
            choices: {
              create: [
                { text: '10%', isCorrect: false },
                { text: '12.5%', isCorrect: true },
                { text: '15%', isCorrect: false },
                { text: '18%', isCorrect: false }
              ]
            }
          }
        ]
      }
    }
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