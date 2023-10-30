import { Test, TestingModule } from '@nestjs/testing';
import { TicketService } from 'src/ticket/ticket.service';
import { PrismaService } from 'src/database/prisma.service';

describe('TicketService', () => {
  let ticketService: TicketService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketService, PrismaService],
    }).compile();

    ticketService = module.get<TicketService>(TicketService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('deve calcular o ticket médio mensal por cliente', async () => {
    const prismaQueryRawMock = jest.fn();
    prismaService.$queryRaw = prismaQueryRawMock;

    const consultaMockResult = [
      { id_cliente: 1, ticketMedio: 'R$ 500.00' },
      { id_cliente: 2, ticketMedio: 'R$ 800.00' },
    ];
    prismaQueryRawMock.mockResolvedValue(consultaMockResult);

    const resultado = await ticketService.calcularTicketMedioMensalPorCliente();

    expect(prismaQueryRawMock).toHaveBeenCalledWith(expect.any(String));

    expect(resultado).toEqual(consultaMockResult);
  });
});
