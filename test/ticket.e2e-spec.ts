import { Test, TestingModule } from '@nestjs/testing';
import { TicketController } from 'src/ticket/ticket.controller';
import { TicketService } from 'src/ticket/ticket.service';

describe('TicketController', () => {
  let controller: TicketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketController],
      providers: [TicketService],
    }).compile();

    controller = module.get<TicketController>(TicketController);
  });

  it('define o ticket', () => {
    expect(controller).toBeDefined();
  });

  it('calcular o ticket medio', async () => {
    const result = await controller.calcularTicketMedioMensalPorCliente();
    expect(result).toBeDefined();
  });
});
