import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class BranchService {
    constructor(private prisma: PrismaService) {}

    async getAvailableBranchs() {
        const resultado: Array<object> = await this.prisma.filial.findMany({
            select: {
                id_filial: true,
                nome: true
            }
          });

        return resultado; 
    }
}
