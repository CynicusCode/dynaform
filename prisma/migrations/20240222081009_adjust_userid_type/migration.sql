/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[clientId]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientId` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FormResponse" DROP CONSTRAINT "FormResponse_userId_fkey";

-- AlterTable
ALTER TABLE "FormResponse" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "clientId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Organization_clientId_key" ON "Organization"("clientId");

-- AddForeignKey
ALTER TABLE "FormResponse" ADD CONSTRAINT "FormResponse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
