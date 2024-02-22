/*
  Warnings:

  - A unique constraint covering the columns `[templateId]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "FieldType" ADD VALUE 'CHECKBOX';
ALTER TYPE "FieldType" ADD VALUE 'NUMBER';

-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "baseTemplateId" INTEGER;

-- CreateTable
CREATE TABLE "FormSubmission" (
    "id" SERIAL NOT NULL,
    "formResponseId" INTEGER NOT NULL,
    "confirmationNumber" TEXT NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FormSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FormSubmission_formResponseId_key" ON "FormSubmission"("formResponseId");

-- CreateIndex
CREATE UNIQUE INDEX "FormSubmission_confirmationNumber_key" ON "FormSubmission"("confirmationNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_templateId_key" ON "Organization"("templateId");

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_baseTemplateId_fkey" FOREIGN KEY ("baseTemplateId") REFERENCES "Template"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormSubmission" ADD CONSTRAINT "FormSubmission_formResponseId_fkey" FOREIGN KEY ("formResponseId") REFERENCES "FormResponse"("id") ON DELETE CASCADE ON UPDATE CASCADE;
