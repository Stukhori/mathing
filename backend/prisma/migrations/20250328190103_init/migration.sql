/*
  Warnings:

  - You are about to drop the column `theory` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the `Problem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Solution` table. If the table is not empty, all the data it contains will be lost.
*/

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- DropForeignKey
ALTER TABLE "Problem" DROP CONSTRAINT "Problem_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "Solution" DROP CONSTRAINT "Solution_problemId_fkey";

-- AlterTable
-- First make the changes that don't affect existing data
ALTER TABLE "Lesson" DROP COLUMN "theory",
ADD COLUMN     "difficulty" "Difficulty" NOT NULL DEFAULT 'BEGINNER',
ALTER COLUMN "description" DROP NOT NULL;

-- Add the order column as nullable first
ALTER TABLE "Lesson" ADD COLUMN "order" INTEGER;

-- Set default values for existing rows (using id as order)
UPDATE "Lesson" SET "order" = id;

-- Now make it required and add unique constraint
ALTER TABLE "Lesson" ALTER COLUMN "order" SET NOT NULL;
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_order_key" UNIQUE ("order");

-- DropTable
DROP TABLE "Problem";

-- DropTable
DROP TABLE "Solution";

-- CreateTable
CREATE TABLE "LessonTag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "LessonTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prerequisite" (
    "id" SERIAL NOT NULL,
    "lessonId" INTEGER NOT NULL,
    "requiredLessonId" INTEGER NOT NULL,

    CONSTRAINT "Prerequisite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "explanation" TEXT,
    "difficulty" "Difficulty" NOT NULL DEFAULT 'BEGINNER',
    "lessonId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionTag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "QuestionTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Theory" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "content" TEXT NOT NULL,
    "examples" JSONB,
    "lessonId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "mediaUrl" TEXT,
    "mediaType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Theory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Choice" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL DEFAULT false,
    "questionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Choice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LessonToLessonTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_LessonToLessonTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_QuestionToQuestionTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_QuestionToQuestionTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "LessonTag_name_key" ON "LessonTag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Prerequisite_lessonId_requiredLessonId_key" ON "Prerequisite"("lessonId", "requiredLessonId");

-- CreateIndex
CREATE UNIQUE INDEX "Question_lessonId_order_key" ON "Question"("lessonId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionTag_name_key" ON "QuestionTag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Theory_lessonId_order_key" ON "Theory"("lessonId", "order");

-- CreateIndex
CREATE INDEX "_LessonToLessonTag_B_index" ON "_LessonToLessonTag"("B");

-- CreateIndex
CREATE INDEX "_QuestionToQuestionTag_B_index" ON "_QuestionToQuestionTag"("B");

-- AddForeignKey
ALTER TABLE "Prerequisite" ADD CONSTRAINT "Prerequisite_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prerequisite" ADD CONSTRAINT "Prerequisite_requiredLessonId_fkey" FOREIGN KEY ("requiredLessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Theory" ADD CONSTRAINT "Theory_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LessonToLessonTag" ADD CONSTRAINT "_LessonToLessonTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LessonToLessonTag" ADD CONSTRAINT "_LessonToLessonTag_B_fkey" FOREIGN KEY ("B") REFERENCES "LessonTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToQuestionTag" ADD CONSTRAINT "_QuestionToQuestionTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToQuestionTag" ADD CONSTRAINT "_QuestionToQuestionTag_B_fkey" FOREIGN KEY ("B") REFERENCES "QuestionTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;