import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteModule } from './paciente/paciente.module';
import { ProfissionalModule } from './profissional/profissional.module';
import { AcompanhamentoModule } from './acompanhamento/acompanhamento.module';
import { FeedbackModule } from './feedback/feedback.module';
import { EmocaoModule } from './emocao/emocao.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOSTNAME,
      username: process.env.USERNAME, 
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
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
