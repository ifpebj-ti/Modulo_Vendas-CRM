import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}
    
    async bestSellingProducts(
        startDate: Date,
        endDate: Date,
        branchId: number,
    ) {
        return [
            {
                "id_produto": 4,
                "nome": "Insulina Lantus",
                "quantidade_vendida": 19,
                "total_vendido": 493.81
            },
            {
                "id_produto": 1,
                "nome": "Aspirina",
                "quantidade_vendida": 55,
                "total_vendido": 329.45
            },
            {
                "id_produto": 3,
                "nome": "Multivitamínico Centrum",
                "quantidade_vendida": 21,
                "total_vendido": 325.29
            },
            {
                "id_produto": 2,
                "nome": "Shampoo Pantene",
                "quantidade_vendida": 22,
                "total_vendido": 279.98
            },
            {
              "id_produto": 5,
              "nome": "Leite em Pó Ninho",
              "quantidade_vendida": 19,
              "total_vendido": 170.81
            }
          ]
    }
}
