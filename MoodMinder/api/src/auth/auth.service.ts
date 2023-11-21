import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PacienteService } from 'src/paciente/paciente.service';

@Injectable()
export class AuthService {
  constructor(
    private pacienteService: PacienteService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const paciente = await this.pacienteService.findEmail(email);

    if (paciente?.senha !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: paciente.id, email: paciente.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
