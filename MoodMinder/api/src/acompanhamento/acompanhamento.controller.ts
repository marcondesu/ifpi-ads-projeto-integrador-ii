import {
  Controller,
  Post,
  Get,
  Body,
  Delete,
  Param,
  UseGuards,
  Headers,
  Patch,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { AcompanhamentoService } from './acompanhamento.service';
import { Feedback } from 'src/feedback/entities/feedback.entity';
import { Acompanhamento } from './entities/acompanhamento.entity';
import { CreateAcompanhamentoDto } from './dto/create-acompanhamento.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Acompanhamento')
@Controller('acompanhamento')
export class AcompanhamentoController {
  constructor(private readonly acompanhamentoService: AcompanhamentoService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createAcompanhamentoDto: CreateAcompanhamentoDto) {
    return await this.acompanhamentoService.create(createAcompanhamentoDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(
    @Headers('authorization') token: string,
  ): Promise<Acompanhamento[]> {
    return await this.acompanhamentoService.findAll(token);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Acompanhamento> {
    return await this.acompanhamentoService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id/finalizar/:date')
  async updatePartial(@Param('id') id: string, @Param('date') date: Date) {
    return await this.acompanhamentoService.finish(id, date);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    return await this.acompanhamentoService.remove(id);
  }
}
