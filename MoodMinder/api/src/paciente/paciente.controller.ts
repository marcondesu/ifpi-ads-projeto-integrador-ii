import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { Paciente } from './entities/paciente.entity';
import { DeleteResult } from 'typeorm';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  async create(@Body() createPacienteDto: CreatePacienteDto) {
    return await this.pacienteService.create(createPacienteDto);
  }

  @Get()
  async findAll(): Promise<Paciente[]> {
    return await this.pacienteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Paciente> {
    return await this.pacienteService.findOne(id);
  }

  @Patch(':id')
  async updatePartial(
    @Param('id') id: string,
    @Body() updatePacienteDto: Partial<CreatePacienteDto>,
  ) {
    return await this.pacienteService.updatePartial(id, updatePacienteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    return await this.pacienteService.remove(id);
  }
}
