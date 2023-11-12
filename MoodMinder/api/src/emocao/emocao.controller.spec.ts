import { Test, TestingModule } from '@nestjs/testing';
import { EmocaoController } from './emocao.controller';
import { EmocaoService } from './emocao.service';

describe('EmocaoController', () => {
  let controller: EmocaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmocaoController],
      providers: [EmocaoService],
    }).compile();

    controller = module.get<EmocaoController>(EmocaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
