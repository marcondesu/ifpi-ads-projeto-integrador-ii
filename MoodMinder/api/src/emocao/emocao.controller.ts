import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Patch,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { EmocaoService } from './emocao.service';
import { Emocao } from './entities/emocao.entity';
import { CreateEmocaoDto } from './dto/create-emocao.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Emoção')
@Controller('emocao')
export class EmocaoController {
  constructor(private readonly emocaoService: EmocaoService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createEmocaoDto: CreateEmocaoDto) {
    return this.emocaoService.create(createEmocaoDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Headers('authorization') token: string): Promise<Emocao[]> {
    return await this.emocaoService.findAll(token);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Emocao> {
    return await this.emocaoService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async updatePartial(
    @Param('id') id: string,
    @Body() updateEmocaoDto: Partial<CreateEmocaoDto>,
  ) {
    return await this.emocaoService.updatePartial(id, updateEmocaoDto);
  }

  @UseGuards(AuthGuard)
  @Patch(':id/mudar-privacidade')
  async updatePrivacidade(@Param('id') id: string): Promise<Emocao> {
    return this.emocaoService.updatePrivacidade(id);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    return await this.emocaoService.remove(id);
  }
}
