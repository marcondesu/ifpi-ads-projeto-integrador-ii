import { Module } from '@nestjs/common';
import { ProfissionalService } from './profissional.service';
import { ProfissionalController } from './profissional.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profissional } from './entities/profissional.entity';
import { PacienteModule } from 'src/paciente/paciente.module';

@Module({
  imports: [TypeOrmModule.forFeature([Profissional]), PacienteModule],
  controllers: [ProfissionalController],
  providers: [ProfissionalService],
})
export class ProfissionalModule {}
