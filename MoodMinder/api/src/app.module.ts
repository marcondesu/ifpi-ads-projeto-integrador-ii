import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteModule } from './paciente/paciente.module';
import { ProfissionalModule } from './profissional/profissional.module';
import { AcompanhamentoModule } from './acompanhamento/acompanhamento.module';
import { FeedbackModule } from './feedback/feedback.module';
import { EmocaoModule } from './emocao/emocao.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
    }),
    PacienteModule,
    ProfissionalModule,
    AcompanhamentoModule,
    FeedbackModule,
    EmocaoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
