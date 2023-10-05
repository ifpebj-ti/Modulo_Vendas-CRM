import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class PurchasesService {
    constructor(private readonly prismaService: PrismaService) {}

    async calcularFrequenciaEValorGastoPorCliente() {
      const clientes = await this.prismaService.cliente.findMany();
      const dados = await Promise.all(
        clientes.map(async (cliente) => {
          const frequencia = await this.calcularFrequencia(cliente.id_cliente);
          const valorGasto = await this.calcularValorGasto(cliente.id_cliente);
          return{
            id_cliente: cliente.id_cliente,
            frequencia,
            valor_gasto: valorGasto,
          };
        })
      );

      return dados;
    
  }

  private async calcularFrequencia(idCliente: number){
    const numeroDeVendas = await this.prismaService.venda.count({
      where: {
        id_cliente: idCliente,
      },
    });
    return numeroDeVendas;
  }
 
  private async calcularValorGasto(idCliente: number) {
    const vendasDoCliente = await this.prismaService.venda.findMany({
      where: {
        id_cliente: idCliente,
      },
    });
    const totalGasto = vendasDoCliente.reduce(
      (acumulador, venda) => acumulador.plus(new Decimal(venda.total_venda)),
      new Decimal(0)
    );
    return totalGasto.toString();
  }
}
