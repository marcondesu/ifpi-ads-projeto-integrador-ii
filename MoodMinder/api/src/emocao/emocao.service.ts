import { Injectable } from '@nestjs/common';
import { CreateEmocaoDto } from './dto/create-emocao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Emocao } from './entities/emocao.entity';
import { DeleteResult, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Privacidade } from 'src/privacidade';

@Injectable()
export class EmocaoService {
  constructor(
    @InjectRepository(Emocao)
    private emocaoRepository: Repository<Emocao>,
    private jwtService: JwtService,
  ) {}

  public async create(createEmocaoDto: CreateEmocaoDto) {
    const emocao = new Emocao();
    emocao.idPaciente = createEmocaoDto.idPaciente;
    emocao.categoria = createEmocaoDto.categoria;
    emocao.intensidade = createEmocaoDto.intensidade;
    emocao.descricao = createEmocaoDto.descricao;
    emocao.contexto = createEmocaoDto.contexto;
    emocao.privacidade = createEmocaoDto.privacidade;
    emocao.data = new Date();

    return await this.emocaoRepository.save(emocao);
  }

  public async findAll(token: string): Promise<Emocao[]> {
    const user_id = await this.extractPacienteIdFromToken(token);

    return await this.emocaoRepository.find({ where: { idPaciente: user_id } });
  }

  private async extractPacienteIdFromToken(token: string): Promise<string> {
    token = token.replace('Bearer ', '');

    return this.jwtService.decode(token).sub;
  }

  public async findOne(id: string): Promise<Emocao> {
    return await this.emocaoRepository.findOne({ where: { id: id } });
  }

  public async findPublicEmotionsByPacientId(
    paciente_id: string[],
  ): Promise<Emocao[]> {
    return await this.emocaoRepository
      .createQueryBuilder('emocao')
      .where('emocao.idPaciente IN (:...paciente_id)', { paciente_id })
      .andWhere('emocao.privacidade = :privas', { privas: Privacidade.PUBLICO })
      .getMany();
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this.emocaoRepository.delete({ id: id });
  }

  public async updatePartial(
    id: string,
    partialEmocaoDto: Partial<CreateEmocaoDto>,
  ) {
    const emocao = await this.findOne(id);
    if (!emocao) {
      return null;
    }

    Object.assign(emocao, partialEmocaoDto);
    return await this.emocaoRepository.save(emocao);
  }

  public async updatePrivacidade(id: string) {
    const emocao = await this.findOne(id);

    if (!emocao) {
      return null;
    }

    emocao.mudarPrivacidade();

    return await this.emocaoRepository.save(emocao);
  }
}
