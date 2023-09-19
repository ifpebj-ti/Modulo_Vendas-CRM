/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `id_client` on the `Venda` table. All the data in the column will be lost.
  - Added the required column `clienteId` to the `Venda` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Client";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Product";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Cliente" (
    "id_cliente" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Produto" (
    "id_produto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_produto" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "precoVenda" REAL NOT NULL,
    "quantidadeEstoque" INTEGER NOT NULL,
    "dataValidade" DATETIME NOT NULL,
    "fornecedor" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ItemVenda" (
    "id_itemVenda" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_venda" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "quantidadeVendida" INTEGER NOT NULL,
    "precoUnitario" REAL NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Venda" (
    "id_venda" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataHoraVenda" DATETIME NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "totalVenda" REAL NOT NULL
);
INSERT INTO "new_Venda" ("dataHoraVenda", "id_venda", "totalVenda") SELECT "dataHoraVenda", "id_venda", "totalVenda" FROM "Venda";
DROP TABLE "Venda";
ALTER TABLE "new_Venda" RENAME TO "Venda";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
