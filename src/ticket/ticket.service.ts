import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async calcularTicketMedioMensalPorCliente(): Promise<Array<object>> {
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

  async vendasPorCliente(id_cliente:number){
    const resultado:  Array<object> = await this.prisma.$queryRaw`
      SELECT
        c.id_cliente,
        v.total_venda
      FROM cliente c
      LEFT JOIN venda v ON c.id_cliente = v.id_cliente
      WHERE c.id_cliente = ${parseInt(id_cliente.toString())}
    `;
    return resultado; 
  }
} 

