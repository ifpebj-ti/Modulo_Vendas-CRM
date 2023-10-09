import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  imports: [],
  providers: [SalesService, PrismaService],
  controllers: [SalesController],
})
export class SalesModule {}
