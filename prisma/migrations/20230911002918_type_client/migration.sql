-- CreateTable
CREATE TABLE "Cliente" (
    "id_cliente" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id_produto" INTEGER NOT NULL,
    "nome_produto" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "precoVenda" DOUBLE PRECISION NOT NULL,
    "quantidadeEstoque" INTEGER NOT NULL,
    "dataValidade" TIMESTAMP(3) NOT NULL,
    "fornecedor" TEXT NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id_produto")
);

-- CreateTable
CREATE TABLE "Venda" (
    "id_venda" SERIAL NOT NULL,
    "dataHoraVenda" TIMESTAMP(3) NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "totalVenda" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Venda_pkey" PRIMARY KEY ("id_venda")
);

-- CreateTable
CREATE TABLE "ItemVenda" (
    "id_itemVenda" SERIAL NOT NULL,
    "id_venda" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "quantidadeVendida" INTEGER NOT NULL,
    "precoUnitario" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ItemVenda_pkey" PRIMARY KEY ("id_itemVenda")
);
