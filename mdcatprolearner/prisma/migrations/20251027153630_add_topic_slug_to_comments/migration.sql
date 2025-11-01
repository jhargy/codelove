/*
  Warnings:

  - Added the required column `topic_slug` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "topic_slug" TEXT NOT NULL;
