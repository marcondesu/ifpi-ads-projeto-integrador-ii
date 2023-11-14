import { Injectable } from '@nestjs/common';
import { CreateEmocaoDto } from './dto/create-emocao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Emocao } from './entities/emocao.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class EmocaoService {
  constructor(
    @InjectRepository(Emocao)
    private emocaoRepository: Repository<Emocao>,
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

  public async findAll(): Promise<Emocao[]> {
    return await this.emocaoRepository.find();
  }

  public async findOne(id: string): Promise<Emocao> {
    return await this.emocaoRepository.findOne({ where: { id: id } });
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
