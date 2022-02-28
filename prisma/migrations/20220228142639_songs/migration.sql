/*
  Warnings:

  - Added the required column `url` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Playlist_name_key";

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "url" TEXT NOT NULL;
