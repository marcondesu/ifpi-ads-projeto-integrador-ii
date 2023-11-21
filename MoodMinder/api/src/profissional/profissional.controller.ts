import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { ProfissionalService } from './profissional.service';
import { Profissional } from './entities/profissional.entity';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Profissional')
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

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Profissional> {
    console.log('findOne');
    return await this.profissionalService.findOne(id);
  }

  @UseGuards(AuthGuard)
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
