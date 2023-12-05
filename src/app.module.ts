import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { SalesModule } from './sales/sales.module';
import { TicketModule } from './ticket/ticket.module';
import { BranchModule } from './branch/branch.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [SalesModule, TicketModule, BranchModule, ProductsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
