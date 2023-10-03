import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class PurchasesService {
    constructor(private prismaService: PrismaService) {}

    async calcularFrequencia(idCliente: number) {
        // Consulta ao banco de dados para contar o número de vendas do cliente
        const numeroDeVendas = await this.prismaService.venda.count({
          where: {
            id_cliente: idCliente,
          },
        });
    
        return numeroDeVendas;
      }
    
      async calcularValorGasto(idCliente: number) {
        // Consulta ao banco de dados para calcular o total_gasto pelo cliente
        const vendasDoCliente = await this.prismaService.venda.findMany({
          where: {
            id_cliente: idCliente,
          },
        });
    
        // Calcular o total_gasto somando o total_venda de todas as vendas
        const totalGasto = vendasDoCliente.reduce(
          (acumulador, venda) => acumulador.plus(new Decimal(venda.total_venda)),
          new Decimal(0)
        );
    
        return totalGasto.toString();
      }
        


}
