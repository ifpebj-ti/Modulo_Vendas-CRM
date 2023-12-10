import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/database/prisma.service';
import { ProductsController } from 'src/products/products.controller';
import { ProductsService } from 'src/products/products.service';

describe('ProductsService', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService, PrismaService],
    }).compile();
    controller = module.get(ProductsController);
  });

  it('Test products most selling', async () => {
    const products = await controller.bestSellingProducts(
      new Date("2023-10-06"), 
      new Date("2023-10-06"), 
      4
    )

    expect(products).toBeDefined();
  });
});
