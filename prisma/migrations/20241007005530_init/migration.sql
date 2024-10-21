/*
  Warnings:

  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "cover_url" TEXT NOT NULL,
    "total_pages" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CategoriesOnBooks" (
    "book_id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    PRIMARY KEY ("book_id", "categoryId"),
    CONSTRAINT "CategoriesOnBooks_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CategoriesOnBooks_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ratings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rate" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "book_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "ratings_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ratings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "avatar_url" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "emailVerified" DATETIME
);
INSERT INTO "new_users" ("avatar_url", "created_at", "email", "emailVerified", "id", "name") SELECT "avatar_url", "created_at", "email", "emailVerified", "id", "name" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");
