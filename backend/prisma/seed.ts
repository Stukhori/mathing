import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.dailyTask.deleteMany();

  // Create 5 math daily tasks
  const dailyTasks = [
    {
      title: "Vacation Savings",
      description: "Agzam wants to go on a vacation to Vietnam, the trip costs $1,200. She plans to save money every month for a year. In the first month, she saves $50, and each subsequent month, she increases her savings by $10. Will she have enough money by the end of the year to afford the trip?",
      answer: "Yes, she will save $1,260 which is enough for the $1,200 trip."
    },
    {
      title: "Rectangle Area",
      description: "A rectangle has a length that is 3 times its width. If the perimeter of the rectangle is 48 meters, what is the area of the rectangle?",
      answer: "108 square meters"
    },
    {
      title: "Train Speed",
      description: "Two trains are 500 km apart and moving towards each other. One train moves at 60 km/h and the other at 90 km/h. How many hours will it take for them to meet?",
      answer: "3.33 hours (or 3 hours and 20 minutes)"
    },
    {
      title: "Age Problem",
      description: "John is twice as old as Mary. In 5 years, the sum of their ages will be 70. How old is John now?",
      answer: "40 years old"
    },
    {
      title: "Percentage Discount",
      description: "A store offers a 20% discount on all items. If a customer buys a shirt originally priced at $45 and pays with a $50 bill, how much change should they receive?",
      answer: "$14"
    }
  ];

  // Create tasks in database
  for (const task of dailyTasks) {
    await prisma.dailyTask.create({
      data: task
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });