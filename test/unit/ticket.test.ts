import { Test, TestingModule } from '@nestjs/testing';
import { TicketService } from '../../src/ticket/ticket.service';
import { PrismaService } from '../../src/database/prisma.service';

describe('TicketService', () => {
  let ticketService: TicketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketService, PrismaService],
    }).compile();

    ticketService = module.get<TicketService>(TicketService);
  });

  it('deve calcular o ticket médio mensal por cliente', async () => {
    const resultado = await ticketService.calcularTicketMedioMensalPorCliente();

    expect(Array.isArray(resultado)).toBe(true);
    expect(resultado.length).toBeGreaterThan(0);
  });
});

