import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get("bestSellingProducts")
  async bestSellingProducts() {
    try {
      const resultado = await this.productsService.bestSellingProducts();
      return resultado;
    } catch(error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
