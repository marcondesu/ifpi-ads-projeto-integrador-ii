import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { EmocaoService } from './emocao.service';
import { CreateEmocaoDto } from './dto/create-emocao.dto';
import { Emocao } from './entities/emocao.entity';
import { DeleteResult } from 'typeorm';

@Controller('emocao')
export class EmocaoController {
  constructor(private readonly emocaoService: EmocaoService) {}

  @Post()
  create(@Body() createEmocaoDto: CreateEmocaoDto) {
    return this.emocaoService.create(createEmocaoDto);
  }

  @Get()
  async findAll(): Promise<Emocao[]> {
    return await this.emocaoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Emocao> {
    return await this.emocaoService.findOne(id);
  }

  @Patch(':id')
  async updatePartial(
    @Param('id') id: string,
    @Body() updateEmocaoDto: Partial<CreateEmocaoDto>,
  ) {
    return await this.emocaoService.updatePartial(id, updateEmocaoDto);
  }

  @Patch(':id/mudar-privacidade')
  async updatePrivacidade(@Param('id') id: string): Promise<Emocao> {
    return this.emocaoService.updatePrivacidade(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    return await this.emocaoService.remove(id);
  }
}
