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
}
