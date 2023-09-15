import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { FakerInsertController } from './fake.insert.controller';

@Module({
  imports: [],
  controllers: [AppController, FakerInsertController],
  providers: [PrismaService],
})

export class AppModule {}
