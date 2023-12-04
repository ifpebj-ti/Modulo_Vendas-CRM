import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async calculateTicketAllClients(): Promise<Array<object>> {
    const resultado: Array<object> = await this.prisma.$queryRaw`
      SELECT
        c.id_cliente,
        AVG(v.total_venda) as ticketMedio
      FROM cliente c
      LEFT JOIN venda v ON c.id_cliente = v.id_cliente

      GROUP BY c.id_cliente
    `;
    return resultado;
  }

  async salesByClients(clientId:number){
    const resultado:  Array<object> = await this.prisma.$queryRaw`
      SELECT
        c.id_cliente,
        v.total_venda
      FROM cliente c
      LEFT JOIN venda v ON c.id_cliente = v.id_cliente
      WHERE c.id_cliente = ${parseInt(clientId.toString())}
    `;
    return resultado; 
  }

  async calculateTicketByIntervalAndBranch(
    startDate: Date,
    endDate: Date,
    branchId: number,
  ): Promise<Array<object>> {
    const intBranch = parseInt(branchId.toString())

    const resultado: Array<object> = await this.prisma.$queryRaw`
      SELECT
        SUM(v.total_venda) / COUNT(v.id_venda) as ticketMedio
      FROM venda v
      WHERE v.data BETWEEN ${startDate} AND ${endDate}
      AND v.id_filial = ${intBranch}
    `;

    return resultado;
  }
}
