import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.dto';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
  ) {}

  public async create(createPacienteDto: CreatePacienteDto) {
    const paciente = new Paciente();
    paciente.nome = createPacienteDto.nome;
    paciente.cpf = createPacienteDto.cpf;
    paciente.sexo = createPacienteDto.sexo;
    paciente.email = createPacienteDto.email;
    paciente.nascimento = createPacienteDto.nascimento;

    return await this.pacienteRepository.save(paciente);
  }

  public async findAll(): Promise<Paciente[]> {
    return await this.pacienteRepository.find();
  }

  public async findOne(id: string): Promise<Paciente> {
    return await this.pacienteRepository.findOne({ where: { id: id } });
  }

  public async updatePartial(
    id: string,
    partialPacienteDto: Partial<CreatePacienteDto>,
  ) {
    const paciente = await this.findOne(id);
    if (!paciente) {
      return null;
    }

    Object.assign(paciente, partialPacienteDto);
    return await this.pacienteRepository.save(paciente);
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this.pacienteRepository.delete({ id: id });
  }
}
