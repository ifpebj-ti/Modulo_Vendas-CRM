import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { FakeController } from './fake/fake.controller';
import { SalesModule } from './sales/sales.module';
import { PurchasesModule } from './purchases/purchases.module';
import { TicketModule } from './ticket/ticket.module';
import { TicketService } from './ticket/ticket.service';

@Module({
  imports: [SalesModule, PurchasesModule, TicketModule],
  controllers: [AppController, FakeController, FakeController],
  providers: [PrismaService],
})

export class AppModule {}
