import { Injectable } from '@nestjs/common';
import { produto } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}
    
    async bestSellingProducts(
        startDate: Date,
        endDate: Date,
        branchId: number,
    ) {
        const intBranch = parseInt(branchId.toString());

        const result: produto[] = await this.prisma.$queryRaw`
            SELECT
                produto.id_produto, produto.nome, SUM(item_venda.quantidade_vendida) as quantidade_vendida, SUM(item_venda.quantidade_vendida * item_venda.preco_unitario) as total_vendido
            FROM
                produto
            LEFT JOIN
                item_venda ON produto.id_produto = item_venda.id_produto
            JOIN
                venda ON venda.id_venda = item_venda.id_venda
            WHERE venda.data BETWEEN ${startDate} AND ${endDate} AND venda.id_filial = ${intBranch}
            GROUP BY 
                produto.id_produto,
                item_venda.quantidade_vendida
            ORDER BY total_vendido DESC
            LIMIT 5
        `;

        const resultFormatted = result.map(
            (item: any) => ({
                ...item,
                quantidade_vendida: Number(item.quantidade_vendida),
                total_vendido: Number(item.total_vendido)
            }),
        );
        
        return resultFormatted;
    }
}
