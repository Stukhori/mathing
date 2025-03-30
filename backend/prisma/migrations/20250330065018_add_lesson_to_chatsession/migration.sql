-- DropForeignKey
ALTER TABLE "ChatSession" DROP CONSTRAINT "ChatSession_taskId_fkey";

-- AlterTable
ALTER TABLE "ChatSession" ADD COLUMN     "lessonId" INTEGER,
ALTER COLUMN "taskId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ChatSession" ADD CONSTRAINT "ChatSession_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "DailyTask"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatSession" ADD CONSTRAINT "ChatSession_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;
