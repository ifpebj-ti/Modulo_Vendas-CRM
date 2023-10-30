import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { SalesModule } from './sales/sales.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [SalesModule, TicketModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
