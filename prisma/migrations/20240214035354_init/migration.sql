/*
  Warnings:

  - You are about to drop the column `labelOverrides` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `questionOrder` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `specificQuestions` on the `Template` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "FieldType" AS ENUM ('DROPDOWN', 'TEXT', 'DATE', 'SEARCHABLE_LIST', 'TEXT_AREA');

-- DropForeignKey
ALTER TABLE "Organization" DROP CONSTRAINT "Organization_templateId_fkey";

-- AlterTable
ALTER TABLE "Organization" ALTER COLUMN "templateId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Template" DROP COLUMN "labelOverrides",
DROP COLUMN "questionOrder",
DROP COLUMN "specificQuestions";

-- CreateTable
CREATE TABLE "FormField" (
    "id" SERIAL NOT NULL,
    "fieldName" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "fieldType" "FieldType" NOT NULL,
    "templateId" INTEGER,

    CONSTRAINT "FormField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormFieldOption" (
    "id" SERIAL NOT NULL,
    "formFieldId" INTEGER NOT NULL,
    "optionValue" TEXT NOT NULL,

    CONSTRAINT "FormFieldOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomQuestion" (
    "id" SERIAL NOT NULL,
    "formResponseId" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT,

    CONSTRAINT "CustomQuestion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormField" ADD CONSTRAINT "FormField_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormFieldOption" ADD CONSTRAINT "FormFieldOption_formFieldId_fkey" FOREIGN KEY ("formFieldId") REFERENCES "FormField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomQuestion" ADD CONSTRAINT "CustomQuestion_formResponseId_fkey" FOREIGN KEY ("formResponseId") REFERENCES "FormResponse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
