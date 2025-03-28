import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create addition lesson
  await prisma.lesson.create({
    data: {
      title: "Basic Addition",
      description: "Master fundamental addition skills from simple sums to multi-digit problems",
      difficulty: "BEGINNER",
      order: 3,
      questions: {
        create: [
          // Simple type-in questions
          {
            text: "5 + 3 =",
            order: 1,
            choices: {
              create: [
                { text: "8", isCorrect: true }
              ]
            }
          },
          {
            text: "12 + 7 =",
            order: 2,
            choices: {
              create: [
                { text: "19", isCorrect: true }
              ]
            }
          },
          {
            text: "25 + 14 =",
            order: 3,
            choices: {
              create: [
                { text: "39", isCorrect: true }
              ]
            }
          },
          {
            text: "50 + 25 =",
            order: 4,
            choices: {
              create: [
                { text: "75", isCorrect: true }
              ]
            }
          },
          {
            text: "99 + 1 =",
            order: 5,
            choices: {
              create: [
                { text: "100", isCorrect: true }
              ]
            }
          },
          
          // Word problems and multiple choice
          {
            text: "You're packing snacks for a picnic with your friends. Jake brings 6 apples, and Emma brings 4. How many apples do they have together?",
            order: 6,
            explanation: "6 + 4 = 10",
            choices: {
              create: [
                { text: "10", isCorrect: true }
              ]
            }
          },
          {
            text: "3,467 + 5,289 = ?",
            order: 7,
            choices: {
              create: [
                { text: "8,675", isCorrect: false },
                { text: "8,765", isCorrect: false },
                { text: "8,576", isCorrect: false },
                { text: "8,756", isCorrect: true }
              ]
            }
          },
          {
            text: "A store sold 215 apples in one week and 398 apples in the next week. How many apples were sold in total?",
            order: 8,
            explanation: "215 + 398 = 613",
            choices: {
              create: [
                { text: "603", isCorrect: false },
                { text: "613", isCorrect: true },
                { text: "593", isCorrect: false },
                { text: "623", isCorrect: false }
              ]
            }
          },
          {
            text: "Add: 950 + 725 + 355",
            order: 9,
            choices: {
              create: [
                { text: "2050", isCorrect: false },
                { text: "2075", isCorrect: false },
                { text: "2030", isCorrect: true },
                { text: "1980", isCorrect: false }
              ]
            }
          },
          {
            text: "A farmer has 3245 chickens and buys 1678 more. How many does he have now?",
            order: 10,
            explanation: "3245 + 1678 = 4923",
            choices: {
              create: [
                { text: "4823", isCorrect: false },
                { text: "4923", isCorrect: true },
                { text: "4973", isCorrect: false },
                { text: "4843", isCorrect: false }
              ]
            }
          },
          {
            text: "What is the sum of 7840 and 9625?",
            order: 11,
            choices: {
              create: [
                { text: "17365", isCorrect: false },
                { text: "17465", isCorrect: true },
                { text: "17425", isCorrect: false },
                { text: "17485", isCorrect: false }
              ]
            }
          }
        ]
      }
    }
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })