import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller('api')
export class AppController {
  constructor(private prisma: PrismaService) {}
  
  @Get("sales-by-interval")
  getSalesByInterval() {
    return {
      message: "Hello"
    };
  }
}
