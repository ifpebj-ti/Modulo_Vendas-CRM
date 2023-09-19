import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Cliente } from '@prisma/client';

@Controller('fake')
export class FakeController {
    constructor(private prisma: PrismaService) {}

    @Post("insert-clients")
    async insertClients(@Body() body: any) {
        return await this.prisma.cliente.createMany(
        {
            "data": body["clientes"],
            skipDuplicates: true,
        }
        );
    }

    @Post("insert-products")
    async insertProducts(@Body() body: any) {
        return await this.prisma.produto.createMany(
        {
            "data": body["produtos"],
            skipDuplicates: true,
        }
        );
    }

    @Post("insert-sales")
    async insertSales(@Body() body: any) {
        return await this.prisma.venda.createMany(
        {
            "data": body["vendas"],
            skipDuplicates: true,
        }
        );
    }

    @Post("insert-items-sale")
    async insertItemsSale(@Body() body: any) {
        return await this.prisma.itemVenda.createMany(
        {
            "data": body["itens-vendas"],
            skipDuplicates: true,
        }
        );
    }
}
