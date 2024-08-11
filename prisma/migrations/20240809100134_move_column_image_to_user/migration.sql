/*
  Warnings:

  - You are about to drop the column `coverimage` on the `Information` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Information` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Information" DROP COLUMN "coverimage",
DROP COLUMN "image";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "coverimage" TEXT,
ADD COLUMN     "image" TEXT;
