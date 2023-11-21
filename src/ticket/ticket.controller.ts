import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('api/ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  async calcularTicketMedioMensalPorCliente() {
    try{
      const resultado = await this.ticketService.calcularTicketMedioMensalPorCliente();
      return resultado;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get("vendasPorCliente")
  @ApiQuery({ name: 'idCliente', required: true, type: Number})
  async vendasPorCliente(@Query('idCliente') idCliente: number) {
    try {
      const resultado = await this.ticketService.vendasPorCliente(idCliente);
      return resultado;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
