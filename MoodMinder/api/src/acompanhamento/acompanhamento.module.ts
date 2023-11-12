import { Module } from '@nestjs/common';
import { AcompanhamentoService } from './acompanhamento.service';
import { AcompanhamentoController } from './acompanhamento.controller';
import { Acompanhamento } from './entities/acompanhamento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackModule } from 'src/feedback/feedback.module';

@Module({
  imports: [TypeOrmModule.forFeature([Acompanhamento]), FeedbackModule],
  controllers: [AcompanhamentoController],
  providers: [AcompanhamentoService],
})
export class AcompanhamentoModule {}
