import { Test, TestingModule } from '@nestjs/testing';
import { TicketService } from 'src/ticket/ticket.service';
import { PrismaService } from '../database/prisma.service';

describe('TicketService', () => {
  let ticketService: TicketService;

  // Antes de cada teste, inicialize o módulo de teste
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketService, PrismaService],
    }).compile();

    ticketService = module.get<TicketService>(TicketService);
  });

  it('deve calcular o ticket médio por mês corretamente', async () => {
    const prismaServiceMock = {
      $queryRaw: jest.fn().mockResolvedValue([
        { id_cliente: 1, ticketMedio: 'R$ 500.00' },
        { id_cliente: 2, ticketMedio: 'R$ 800.00' },
      ]),
    };

    ticketService['prisma'] = prismaServiceMock as any;

    const resultado = await ticketService.calcularTicketMedioPorMes();

    expect(resultado).toEqual([
      { id_cliente: 1, ticketMedio: 'R$ 500.00' },
      { id_cliente: 2, ticketMedio: 'R$ 800.00' },
    ]);

    expect(prismaServiceMock.$queryRaw).toHaveBeenCalledWith(
      expect.any(String),
    );
  });
});
