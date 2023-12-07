import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { AcompanhamentoModule } from 'src/acompanhamento/acompanhamento.module';
import { FeedbackModule } from 'src/feedback/feedback.module';
import { EmocaoModule } from 'src/emocao/emocao.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Paciente]),
    AcompanhamentoModule,
    FeedbackModule,
    EmocaoModule,
    JwtModule,
  ],
  controllers: [PacienteController],
  providers: [PacienteService],
  exports: [PacienteService],
})
export class PacienteModule {}
