import { Test, TestingModule } from '@nestjs/testing';
import { EmocaoService } from './emocao.service';

describe('EmocaoService', () => {
  let service: EmocaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmocaoService],
    }).compile();

    service = module.get<EmocaoService>(EmocaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
