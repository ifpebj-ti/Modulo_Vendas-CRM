import { Controller, Get, Query } from '@nestjs/common';
import { SalesService } from './sales.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('api/sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get('byIntervalAndBranch')
  @ApiQuery({ name: 'startDate', required: true, type: Date })
  @ApiQuery({ name: 'endDate', required: true, type: Date })
  @ApiQuery({ name: 'branchId', required: false, type: Number })
  async getSalesByIntervalAndBranch(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
    @Query('branchId') branchId: number,
  ) {
    const sales = await this.salesService.getSalesByIntervalAndBranch(
      new Date(startDate),
      new Date(endDate),
      branchId,
    );

    return sales;
  }
}
