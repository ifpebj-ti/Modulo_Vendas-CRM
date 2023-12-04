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

        const result = this.prisma.$queryRaw`
            SELECT
                produto.id_produto,
                produto.nome,
                SUM(iv.quantidade_vendida * iv.preco_unitario) AS total_vendido
            FROM
                item_venda iv
            INNER JOIN
                venda ON iv.id_venda = venda.id_venda
            WHERE
                venda.data BETWEEN ${startDate} AND ${endDate} AND venda.filial == ${intBranch}
            GROUP BY
                produto.id
            LIMIT 5
        `;

        return result;
    }
}
