import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { SalesModule } from './sales/sales.module';
import { PurchasesModule } from './purchases/purchases.module';

@Module({
  imports: [SalesModule, PurchasesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
