/*
  Warnings:

  - You are about to drop the column `organizationId` on the `FormResponse` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `User` table. All the data in the column will be lost.
  - Added the required column `clientId` to the `FormResponse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orgConnectorId` to the `FormResponse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orgConnectorId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FormResponse" DROP CONSTRAINT "FormResponse_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_organizationId_fkey";

-- AlterTable
ALTER TABLE "FormResponse" DROP COLUMN "organizationId",
ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "orgConnectorId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "organizationId",
ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "orgConnectorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_orgConnectorId_fkey" FOREIGN KEY ("orgConnectorId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormResponse" ADD CONSTRAINT "FormResponse_orgConnectorId_fkey" FOREIGN KEY ("orgConnectorId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
