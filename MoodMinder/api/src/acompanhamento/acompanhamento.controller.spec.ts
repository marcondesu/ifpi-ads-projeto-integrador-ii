import { Test, TestingModule } from '@nestjs/testing';
import { AcompanhamentoController } from './acompanhamento.controller';
import { AcompanhamentoService } from './acompanhamento.service';

describe('AcompanhamentoController', () => {
  let controller: AcompanhamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcompanhamentoController],
      providers: [AcompanhamentoService],
    }).compile();

    controller = module.get<AcompanhamentoController>(AcompanhamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
