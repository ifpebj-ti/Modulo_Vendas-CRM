import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get("bestSellingProducts")
  @ApiQuery({ name: 'startDate', required: true, type: Date })
  @ApiQuery({ name: 'endDate', required: true, type: Date })
  @ApiQuery({ name: 'branchId', required: true, type: Number })
  async bestSellingProducts(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
    @Query('branchId') branchId: number,
  ) {
    try {
      const resultado = await this.productsService.bestSellingProducts(
        new Date(startDate),
        new Date(endDate),
        branchId,
      );
      
      return resultado;
    } catch(error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
