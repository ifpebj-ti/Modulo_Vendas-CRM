import { Controller, Get, Param } from '@nestjs/common';
import { PurchasesService } from './purchases.service';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Get(':id/frequencia-valor')
  async calcularFrequencia(@Param('id') id: string) {
    const idCliente = parseInt(id, 10);
    const data = await this.purchasesService.calcularFrequencia(idCliente);
    return data;
  }
}


