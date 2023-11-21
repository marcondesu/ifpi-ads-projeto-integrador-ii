import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PacienteModule } from 'src/paciente/paciente.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PacienteModule,
    JwtModule.register({
      global: true,
      secret: 'segredo',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
