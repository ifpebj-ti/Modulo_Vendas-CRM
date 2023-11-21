import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';
import { SalesService } from './sales.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('api/sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get('sales')
  @ApiQuery({ name: 'startDate', required: true, type: Date })
  @ApiQuery({ name: 'endDate', required: true, type: Date })
  @ApiQuery({ name: 'branchId', required: false, type: Number })
  async getSalesByIntervalAndBranch(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
    @Query('branchId') branchId: number,
  ) {
    try {
      const sales = await this.salesService.getSalesByIntervalAndBranch(
        new Date(startDate),
        new Date(endDate),
        branchId,
      );

      return sales;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('totalBilling')
  @ApiQuery({ name: 'startDate', required: true, type: Date })
  @ApiQuery({ name: 'endDate', required: true, type: Date })
  @ApiQuery({ name: 'branchId', required: false, type: Number })
  async getTotalBillingByIntervalAndBranch(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
    @Query('branchId') branchId: number,
  ) {
    try {
      const result = await this.salesService.getTotalBillingByIntervalAndBranch(
        new Date(startDate),
        new Date(endDate),
        branchId,
      )

      return { totalBilling: result };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('totalSales')
  @ApiQuery({ name: 'startDate', required: true, type: Date })
  @ApiQuery({ name: 'endDate', required: true, type: Date })
  @ApiQuery({ name: 'branchId', required: false, type: Number })
  async getTotalSalesByIntervalAndBranch(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
    @Query('branchId') branchId: number,
  ) {
    try {
      const result = await this.salesService.getTotalSalesByIntervalAndBranch(
        new Date(startDate),
        new Date(endDate),
        branchId,
      )
      
      return { totalSales: result };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
