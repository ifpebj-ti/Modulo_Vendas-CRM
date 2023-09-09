/*
  Warnings:

  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Produto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Cliente";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Produto";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Client" (
    "id_cliente" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
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
CREATE TABLE "Venda" (
    "id_venda" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataHoraVenda" DATETIME NOT NULL,
    "id_client" INTEGER NOT NULL,
    "totalVenda" REAL NOT NULL
);
