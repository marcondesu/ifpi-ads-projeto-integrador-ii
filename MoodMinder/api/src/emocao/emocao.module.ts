import { Module } from '@nestjs/common';
import { EmocaoService } from './emocao.service';
import { EmocaoController } from './emocao.controller';
import { Emocao } from './entities/emocao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Emocao])],
  controllers: [EmocaoController],
  providers: [EmocaoService],
})
export class EmocaoModule {}
