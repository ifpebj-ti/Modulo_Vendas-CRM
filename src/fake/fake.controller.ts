import { Controller, Post } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Controller('fake')
export class FakeController {
  constructor(private prisma: PrismaService) {}

  @Post('insert-clients')
  async insertClients() {}

  @Post('insert-products')
  async insertProducts() {}

  @Post('insert-sales')
  async insertSales() {}

  @Post('insert-items-sale')
  async insertItemsSale() {}
}
