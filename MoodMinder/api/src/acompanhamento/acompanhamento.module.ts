import { Module } from '@nestjs/common';
import { AcompanhamentoService } from './acompanhamento.service';
import { AcompanhamentoController } from './acompanhamento.controller';
import { Acompanhamento } from './entities/acompanhamento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackModule } from 'src/feedback/feedback.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Acompanhamento]),
    FeedbackModule,
    JwtModule,
  ],
  controllers: [AcompanhamentoController],
  providers: [AcompanhamentoService],
})
export class AcompanhamentoModule {}
