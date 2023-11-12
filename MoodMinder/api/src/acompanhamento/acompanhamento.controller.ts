import { Controller, Post, Get, Body, Delete, Param } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { AcompanhamentoService } from './acompanhamento.service';
import { Feedback } from 'src/feedback/entities/feedback.entity';
import { Acompanhamento } from './entities/acompanhamento.entity';
import { CreateAcompanhamentoDto } from './dto/create-acompanhamento.dto';

@ApiTags('Acompanhamento')
@Controller('acompanhamento')
export class AcompanhamentoController {
  constructor(private readonly acompanhamentoService: AcompanhamentoService) {}

  @Post()
  async create(@Body() createAcompanhamentoDto: CreateAcompanhamentoDto) {
    return await this.acompanhamentoService.create(createAcompanhamentoDto);
  }

  @Get()
  async findAll(): Promise<Acompanhamento[]> {
    return await this.acompanhamentoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Acompanhamento> {
    return await this.acompanhamentoService.findOne(id);
  }

  @Get(':id/feedback')
  async findFeedback(@Param('id') id: string): Promise<Feedback[]> {
    return await this.acompanhamentoService.findFeedback(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    return await this.acompanhamentoService.remove(id);
  }
}
