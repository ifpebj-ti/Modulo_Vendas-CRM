import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('api/ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  async calculateTickerMonthyByClients() {
    try{
      const resultado = await this.ticketService.calculateTicketAllClients();
      return resultado;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get("salesByClients")
  @ApiQuery({ name: 'idCliente', required: true, type: Number})
  async salesByClients(@Query('idCliente') clientId: number) {
    try {
      const resultado = await this.ticketService.salesByClients(clientId);
      return resultado;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get("ticketsByIntervalAndBranch")
  @ApiQuery({ name: 'startDate', required: true, type: Date })
  @ApiQuery({ name: 'endDate', required: true, type: Date })
  @ApiQuery({ name: 'branchId', required: true, type: Number })
  async ticketsByIntervalAndBranch(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
    @Query('branchId') branchId: number,
  ) {
    try {
      const resultado = await this.ticketService.calculateTicketByIntervalAndBranch(
        new Date(startDate),
        new Date(endDate),
        branchId
      );
      
      return resultado;
    } catch(error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
