import { Test } from '@nestjs/testing';
import { BranchController } from 'src/branch/branch.controller';
import { BranchService } from 'src/branch/branch.service';
import { PrismaService } from 'src/database/prisma.service';

describe('SalesController', () => {
  let controller: BranchController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [BranchController],
      providers: [BranchService, PrismaService],
    }).compile();
    controller = module.get(BranchController);
  });

  it('', async () => {
    const result = await controller.availableBranchs()
    const branchs = result.branchs;

    expect(branchs).toBeDefined();
    expect(branchs.length).toBeGreaterThan(3);
  });
});
