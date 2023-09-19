import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class SalesService {
    constructor(private prisma: PrismaService) {}

    async getSalesByIntervalAndBranch(
        startDate: Date,
        endDate: Date,
        branchId: number,
    ) {
        const sales = await this.prisma.venda.findMany({
            where: {
                dataHoraVenda: {
                    gte: startDate,
                    lte: endDate,
                }
            },
        });
        return sales;
    }
}
