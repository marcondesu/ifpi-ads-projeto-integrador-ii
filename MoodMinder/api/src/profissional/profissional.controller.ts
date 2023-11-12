import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { ProfissionalService } from './profissional.service';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { Profissional } from './entities/profissional.entity';
import { DeleteResult } from 'typeorm';

@Controller('profissional')
export class ProfissionalController {
  constructor(private readonly profissionalService: ProfissionalService) {}

  @Post()
  async create(@Body() createProfissionalDto: CreateProfissionalDto) {
    return await this.profissionalService.create(createProfissionalDto);
  }

  @Get()
  async findAll(): Promise<Profissional[]> {
    return await this.profissionalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Profissional> {
    console.log('findOne');
    return await this.profissionalService.findOne(id);
  }

  @Patch(':id')
  async updatePartial(
    @Param('id') id: string,
    @Body() updateProfissionalDto: Partial<CreateProfissionalDto>,
  ) {
    return await this.profissionalService.updatePartial(
      id,
      updateProfissionalDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    return await this.profissionalService.remove(id);
  }
}
