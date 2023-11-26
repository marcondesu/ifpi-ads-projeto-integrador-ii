import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PacienteModule } from 'src/paciente/paciente.module';
import { ProfissionalModule } from 'src/profissional/profissional.module';

@Module({
  imports: [
    PacienteModule,
    ProfissionalModule,
    JwtModule.register({
      global: true,
      secret: 'segredo',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
