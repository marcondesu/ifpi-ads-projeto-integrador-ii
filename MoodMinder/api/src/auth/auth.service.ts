import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { PacienteService } from 'src/paciente/paciente.service';
import { Profissional } from 'src/profissional/entities/profissional.entity';
import { ProfissionalService } from 'src/profissional/profissional.service';

@Injectable()
export class AuthService {
  constructor(
    private pacienteService: PacienteService,
    private profissionalService: ProfissionalService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    let usuario: Paciente | Profissional;

    usuario = await this.pacienteService.findEmail(email);

    if (!usuario) {
      usuario = await this.profissionalService.findEmail(email);
    }

    if (usuario?.senha !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: usuario.id, email: usuario.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
