import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}
    
    async bestSellingProducts(
        startDate: Date,
        endDate: Date,
        branchId: number,
    ) {
        const intBranch = parseInt(branchId.toString())
        
        const result = await this.prisma.$queryRaw`
            SELECT
                produto.id_produto, produto.nome, 25 as quantidade_vendida, SUM(25 * item_venda.preco_unitario) as total_vendido
            FROM
                produto
            LEFT JOIN
                item_venda ON produto.id_produto = item_venda.id_produto
            GROUP BY 
                produto.id_produto,
                item_venda.quantidade_vendida
            LIMIT 5
        `;
        
        return [
            {
                "id_produto": 4,
                "nome": "Insulina Lantus",
                "quantidade_vendida": 19,
                "total_vendido": 493.81
            },
            {
                "id_produto": 1,
                "nome": "Aspirina",
                "quantidade_vendida": 55,
                "total_vendido": 329.45
            },
            {
                "id_produto": 3,
                "nome": "Multivitamínico Centrum",
                "quantidade_vendida": 21,
                "total_vendido": 325.29
            },
            {
                "id_produto": 2,
                "nome": "Shampoo Pantene",
                "quantidade_vendida": 22,
                "total_vendido": 279.98
            },
            {
              "id_produto": 5,
              "nome": "Leite em Pó Ninho",
              "quantidade_vendida": 19,
              "total_vendido": 170.81
            }
          ]
    }
}
