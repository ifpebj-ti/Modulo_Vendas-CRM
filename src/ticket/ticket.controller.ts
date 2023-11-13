import { Controller, Get, Query } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  async calcularTicketMedioMensalPorCliente() {
    const resultado = await this.ticketService.calcularTicketMedioMensalPorCliente();
    return resultado;
  }

  @Get("vendasPorCliente")
  @ApiQuery({ name: 'idCliente', required: true, type: Number})
  async vendasPorCliente(@Query('idCliente') idCliente: number) {
    const resultado = await this.ticketService.vendasPorCliente(idCliente);
    return resultado;
  }


}
