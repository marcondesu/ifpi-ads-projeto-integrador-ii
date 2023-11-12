import { Test, TestingModule } from '@nestjs/testing';
import { AcompanhamentoService } from './acompanhamento.service';

describe('AcompanhamentoService', () => {
  let service: AcompanhamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcompanhamentoService],
    }).compile();

    service = module.get<AcompanhamentoService>(AcompanhamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
