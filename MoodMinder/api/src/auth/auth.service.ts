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
    let role: string;

    usuario = await this.pacienteService.findEmail(email);
    role = 'paciente';

    if (!usuario) {
      usuario = await this.profissionalService.findEmail(email);
      role = 'profissional';
    }

    if (usuario?.senha !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: usuario.id, email: usuario.email, role: role };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
