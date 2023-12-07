import { Injectable } from '@nestjs/common';
import { CreateEmocaoDto } from './dto/create-emocao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Emocao } from './entities/emocao.entity';
import { DeleteResult, In, Repository } from 'typeorm';
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
    token = token.replace('Bearer ', '');
    const user_id = await this.extractUserId(token);

    return await this.emocaoRepository.find({ where: { idPaciente: user_id } });
  }

  public async findOne(id: string): Promise<Emocao> {
    return await this.emocaoRepository.findOne({ where: { id: id } });
  }

  public async findPublicEmotionsByPacientId(
    ids_paciente: string[],
  ): Promise<Emocao[]> {
    const emocoes = await this.emocaoRepository.find({
      where: { idPaciente: In(ids_paciente) },
    });

    return emocoes.filter(
      (emocao) => emocao.privacidade === Privacidade.PUBLICO,
    );
  }

  private async extractUserId(token: string) {
    return this.jwtService.decode(token).sub;
  }

  private async extractRole(token: string) {
    return this.jwtService.decode(token).role;
  }

  public async removeFromPacienteId(
    paciente_id: string,
  ): Promise<DeleteResult> {
    return await this.emocaoRepository.delete({ idPaciente: paciente_id });
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
