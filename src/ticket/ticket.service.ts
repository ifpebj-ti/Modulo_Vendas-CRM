import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async calcularTicketMedioMensalPorCliente(): Promise<Array<object>> {
    const resultado: Array<object> = await this.prisma.$queryRaw`
      SELECT
        c.id_cliente,
        TO_CHAR(AVG(v.total_venda), 'L999G999D99') as ticketMedio
      FROM cliente c
      LEFT JOIN venda v ON c.id_cliente = v.id_cliente
      WHERE DATE_TRUNC('month', v.data) = DATE_TRUNC('month', NOW())
      GROUP BY c.id_cliente
    `;

    return resultado;
  }
}

