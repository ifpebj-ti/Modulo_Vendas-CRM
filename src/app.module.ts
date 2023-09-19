import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { FakerInsertController } from './fake.insert.controller';
import { FakeController } from './fake/fake.controller';

@Module({
  imports: [],
  controllers: [AppController, FakerInsertController, FakeController],
  providers: [PrismaService],
})

export class AppModule {}
