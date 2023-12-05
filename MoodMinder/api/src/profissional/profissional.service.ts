import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { Profissional } from './entities/profissional.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { PacienteService } from 'src/paciente/paciente.service';
import { AcompanhamentoService } from 'src/acompanhamento/acompanhamento.service';
import { JwtService } from '@nestjs/jwt';
import { EmocaoService } from 'src/emocao/emocao.service';
import { Emocao } from 'src/emocao/entities/emocao.entity';

@Injectable()
export class ProfissionalService {
  constructor(
    @InjectRepository(Profissional)
    private profissionalRepository: Repository<Profissional>,
    private jwtService: JwtService,
    private emocaoService: EmocaoService,
    private pacienteService: PacienteService,
    private acompanhamentoService: AcompanhamentoService,
  ) {}

  public async create(
    createProfissionalDto: CreateProfissionalDto,
  ): Promise<Profissional | HttpException> {
    if (await this.validateEmail(createProfissionalDto.email)) {
      throw new HttpException(
        `Requisição inválida! E-mail em uso`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const profissional = new Profissional();
    profissional.nome = createProfissionalDto.nome;
    profissional.crm = createProfissionalDto.crm;
    profissional.especialidade = createProfissionalDto.especialidade;
    profissional.sexo = createProfissionalDto.sexo;
    profissional.email = createProfissionalDto.email;
    profissional.senha = createProfissionalDto.senha;
    profissional.nascimento = createProfissionalDto.nascimento;

    try {
      return await this.profissionalRepository.save(profissional);
    } catch (error) {
      throw new HttpException(
        `Requisição inválida! ${error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async validateEmail(email: string): Promise<boolean> {
    const paciente = await this.pacienteService.findEmail(email);

    if (paciente === null) {
      return false;
    }

    return true;
  }

  public async findAll(): Promise<Profissional[]> {
    return await this.profissionalRepository.find();
  }

  public async findOne(id: string): Promise<Profissional> {
    return await this.profissionalRepository.findOne({ where: { id: id } });
  }

  public async findEmail(email: string): Promise<Profissional | null> {
    return await this.profissionalRepository.findOne({
      where: { email: email },
    });
  }

  public async findPacientsEmotions(header: string): Promise<Emocao[]> {
    const profissional_id = this.extractPacienteIdFromToken(header);
    const pacientes =
      await this.acompanhamentoService.findPacientsFromProfessionalId(
        await profissional_id,
      );

    const pacientes_id: string[] = pacientes.map((paciente) => paciente.id);

    return await this.emocaoService.findPublicEmotionsByPacientId(pacientes_id);
  }

  private async extractPacienteIdFromToken(token: string): Promise<string> {
    token = token.replace('Bearer ', '');

    return this.jwtService.decode(token).sub;
  }

  public async updatePartial(
    id: string,
    partialProfissionalDto: Partial<CreateProfissionalDto>,
  ) {
    const profissional = await this.findOne(id);
    if (!profissional) {
      return null;
    }

    Object.assign(profissional, partialProfissionalDto);
    return await this.profissionalRepository.save(profissional);
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this.profissionalRepository.delete({ id: id });
  }
}
