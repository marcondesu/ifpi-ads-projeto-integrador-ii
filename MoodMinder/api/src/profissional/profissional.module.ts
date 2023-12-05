import { Module } from '@nestjs/common';
import { ProfissionalService } from './profissional.service';
import { ProfissionalController } from './profissional.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profissional } from './entities/profissional.entity';
import { PacienteModule } from 'src/paciente/paciente.module';
import { EmocaoModule } from 'src/emocao/emocao.module';
import { JwtModule } from '@nestjs/jwt';
import { AcompanhamentoModule } from 'src/acompanhamento/acompanhamento.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profissional]),
    JwtModule,
    PacienteModule,
    EmocaoModule,
    AcompanhamentoModule,
  ],
  controllers: [ProfissionalController],
  providers: [ProfissionalService],
  exports: [ProfissionalService],
})
export class ProfissionalModule {}
