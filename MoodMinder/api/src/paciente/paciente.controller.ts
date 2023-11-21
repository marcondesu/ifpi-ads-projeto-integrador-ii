import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Patch,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PacienteService } from './paciente.service';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Paciente')
@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Paciente criado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Requisição inválida',
  })
  async create(
    @Body() createPacienteDto: CreatePacienteDto,
  ): Promise<Paciente | HttpException> {
    return await this.pacienteService.create(createPacienteDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Pacientes retornados com sucesso',
  })
  @ApiResponse({
    status: 204,
    description: 'Nenhum paciente encontrado',
  })
  async findAll(): Promise<Paciente[] | HttpException> {
    return await this.pacienteService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Paciente> {
    return await this.pacienteService.findOne(id);
  }

  @UseGuards(AuthGuard)
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
