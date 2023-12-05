import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/database/prisma.service';
import { SalesController } from 'src/sales/sales.controller';
import { SalesService } from 'src/sales/sales.service';

describe('SalesController', () => {
  let controller: SalesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SalesService, PrismaService],
      controllers: [SalesController],
    }).compile();
    controller = module.get(SalesController);
  });

  it('Test get sales by interval and branch', async () => {
    const sales = await controller.getSalesByIntervalAndBranch(
      new Date("2023-10-06"), 
      new Date("2023-10-06"), 
      4
    );
    
    expect(sales).toBeDefined();
    expect(sales.length).toBeGreaterThan(0);
  });
});
