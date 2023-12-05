import { Module } from '@nestjs/common';
import { EmocaoService } from './emocao.service';
import { EmocaoController } from './emocao.controller';
import { Emocao } from './entities/emocao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Emocao]), JwtModule],
  controllers: [EmocaoController],
  providers: [EmocaoService],
  exports: [EmocaoService],
})
export class EmocaoModule {}
