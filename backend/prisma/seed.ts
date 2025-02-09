import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a demo lesson
  const lesson = await prisma.lesson.create({
    data: {
      title: 'Quadratic Equations',
      description: 'Learn how to solve quadratic equations using the discriminant.',
      theory: `
        A quadratic equation is an equation of the form:
        \\( ax^2 + bx + c = 0 \\)
        where \\( a \\), \\( b \\), and \\( c \\) are coefficients, and \\( a \\neq 0 \\).

        The discriminant (\\( D \\)) of a quadratic equation is given by:
        \\( D = b^2 - 4ac \\)

        The discriminant determines the nature of the roots:
        - If \\( D > 0 \\), there are two distinct real roots.
        - If \\( D = 0 \\), there is exactly one real root.
        - If \\( D < 0 \\), there are no real roots (the roots are complex).
      `,
      problems: {
        create: [
          {
            equation: 'x^2 - 5x + 6 = 0',
            solution: {
              create: {
                discriminant: 1,
                roots: ['2', '3'],
              },
            },
          },
          {
            equation: 'x^2 + 4x + 4 = 0',
            solution: {
              create: {
                discriminant: 0,
                roots: ['-2'],
              },
            },
          },
          {
            equation: 'x^2 + 2x + 5 = 0',
            solution: {
              create: {
                discriminant: -16,
                roots: [],
              },
            },
          },
        ],
      },
    },
  });

  console.log('Seeded lesson:', lesson);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });