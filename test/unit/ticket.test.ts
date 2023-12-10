import { Test } from '@nestjs/testing';
import { PrismaService } from 'src/database/prisma.service';
import { TicketController } from 'src/ticket/ticket.controller';
import { TicketService } from 'src/ticket/ticket.service';

describe('TicketService', () => {
  let controller: TicketController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [TicketController],
      providers: [TicketService, PrismaService],
    }).compile();
    controller = module.get(TicketController);
  });

  it('Test calculate ticket by interval and branch', async () => {
    const result = await controller.ticketsByIntervalAndBranch(
      new Date("2023-10-06"), 
      new Date("2023-10-06"), 
      4
    )

    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });

  it('Test sales by client no exist', async () => {
    const result = await controller.salesByClients(
      14565488
    )

    expect(result).toBeDefined();
    expect(result.length).toEqual(0);
  });
});
