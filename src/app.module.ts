import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { FakeController } from './fake/fake.controller';
import { SalesModule } from './sales/sales.module';
import { PurchasesModule } from './purchases/purchases.module';

@Module({
  imports: [SalesModule, PurchasesModule],
  controllers: [AppController, FakeController, FakeController],
  providers: [PrismaService],
})

export class AppModule {}
