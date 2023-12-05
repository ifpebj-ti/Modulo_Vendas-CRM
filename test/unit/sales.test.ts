import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/database/prisma.service';
import { SalesController } from 'src/sales/sales.controller';
import { SalesService } from 'src/sales/sales.service';

describe('SalesService', () => {
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

  it('Test total billing', async () => {
    const result: Array<any> = await controller.getTotalBillingByIntervalAndBranch(
      new Date("2023-10-06"), 
      new Date("2023-10-06"), 
      4
    );
    
    const effectiveValue = result[0];
    const totalBilling = parseInt(effectiveValue.totalbilling);

    expect(result).toBeDefined();
    expect(totalBilling).toBeGreaterThan(0);
    expect(totalBilling).not.toBeGreaterThan(500000);
  });

  it('Test total sales', async () => {
    const result: any = await controller.getTotalSalesByIntervalAndBranch(
      new Date("2023-10-06"), 
      new Date("2023-10-06"), 
      4
    );

    const total = result.totalSales;

    expect(result).toBeDefined();
    expect(total).toBeGreaterThan(0);
    expect(total).not.toBeGreaterThan(500000);
  });
});
