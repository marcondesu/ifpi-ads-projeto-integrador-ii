import { Module } from '@nestjs/common';
import { AcompanhamentoService } from './acompanhamento.service';
import { AcompanhamentoController } from './acompanhamento.controller';
import { Acompanhamento } from './entities/acompanhamento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Acompanhamento]), JwtModule],
  controllers: [AcompanhamentoController],
  providers: [AcompanhamentoService],
  exports: [AcompanhamentoService],
})
export class AcompanhamentoModule {}
