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
        data: {
          gte: startDate,
          lte: endDate,
        },
        id_filial: parseInt(branchId.toString()),
      },
    });
    return sales;
  }

  async getTotalBillingByIntervalAndBranch(
    startDate: Date,
    endDate: Date,
    branchId: number,
  ) {
    const intBranch = parseInt(branchId.toString())

    const totalBilling = await this.prisma.$queryRaw`
      SELECT SUM(total_venda) as totalBilling
      FROM venda
      WHERE data BETWEEN ${startDate} AND ${endDate}
      AND id_filial = ${intBranch}
    `;

    return totalBilling;
  }

  async getTotalSalesByIntervalAndBranch(
    startDate: Date,
    endDate: Date,
    branchId: number,
  ) {
    const intBranch = parseInt(branchId.toString())

    const totalSales = await this.prisma.venda.count({
      where: {
        data: {
            gte: startDate,
            lte: endDate,
        },
        id_filial: intBranch,
      },
    });

    return totalSales;
  }
}
