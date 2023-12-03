import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { SalesModule } from './sales/sales.module';
import { TicketModule } from './ticket/ticket.module';
import { BranchModule } from './branch/branch.module';

@Module({
  imports: [SalesModule, TicketModule, BranchModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
