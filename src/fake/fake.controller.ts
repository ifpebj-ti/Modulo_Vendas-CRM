import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Controller('fake')
export class FakeController {
    constructor(private prisma: PrismaService) {}

    @Post("insert-clients")
    async insertClients(@Body() body: any) {
        
    }

    @Post("insert-products")
    async insertProducts(@Body() body: any) {
        
    }

    @Post("insert-sales")
    async insertSales(@Body() body: any) {
        
    }

    @Post("insert-items-sale")
    async insertItemsSale(@Body() body: any) {
        
    }
}
