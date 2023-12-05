import { Test, TestingModule } from '@nestjs/testing';
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

  it('', async () => {
    
  });
});
