import { Injectable } from '@nestjs/common';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
// import { UpdateProfissionalDto } from './dto/update-profissional.dto';
import { Profissional } from './entities/profissional.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ProfissionalService {
  constructor(
    @InjectRepository(Profissional)
    private profissionalRepository: Repository<Profissional>,
  ) {}

  public async create(createProfissionalDto: CreateProfissionalDto) {
    const profissional = new Profissional();
    profissional.nome = createProfissionalDto.nome;
    profissional.crm = createProfissionalDto.crm;
    profissional.especialidade = createProfissionalDto.especialidade;
    profissional.sexo = createProfissionalDto.sexo;
    profissional.email = createProfissionalDto.email;
    // profissional.senha = createProfissionalDto.senha;
    profissional.nascimento = createProfissionalDto.nascimento;

    return await this.profissionalRepository.save(profissional);
  }

  public async findAll(): Promise<Profissional[]> {
    return await this.profissionalRepository.find();
  }

  public async findOne(id: string): Promise<Profissional> {
    return await this.profissionalRepository.findOne({ where: { id: id } });
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
