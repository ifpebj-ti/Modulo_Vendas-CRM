import { Controller, Get } from '@nestjs/common';
import { PurchasesService } from './purchases.service';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Get(':id/frequencia-valor')
  async calcularFrequencia() {
    const data =
      await this.purchasesService.calcularFrequenciaEValorGastoPorCliente();
    return data;
  }
}
