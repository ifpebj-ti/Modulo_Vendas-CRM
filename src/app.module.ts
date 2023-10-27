import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { SalesModule } from './sales/sales.module';
import { PurchasesModule } from './purchases/purchases.module';
import { TicketModule } from './ticket/ticket.module';
import { TicketService } from './ticket/ticket.service';

@Module({
  imports: [SalesModule, PurchasesModule, TicketModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
