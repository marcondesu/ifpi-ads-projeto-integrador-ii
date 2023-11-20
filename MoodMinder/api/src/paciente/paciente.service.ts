import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  public async create(
    createPacienteDto: CreatePacienteDto,
  ): Promise<Paciente | HttpException> {
    const paciente = new Paciente();
    paciente.nome = createPacienteDto.nome;
    paciente.cpf = createPacienteDto.cpf;
    paciente.sexo = createPacienteDto.sexo;
    paciente.email = createPacienteDto.email;
    paciente.senha = createPacienteDto.senha;
    paciente.nascimento = createPacienteDto.nascimento;

    try {
      return await this.pacienteRepository.save(paciente);
    } catch (error) {
      throw new HttpException(
        `Requisição inválida! ${error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async findAll(): Promise<Paciente[]> {
    const pacientes = await this.pacienteRepository.find();

    if (pacientes.length < 1) {
      throw new HttpException(
        'Nenhum paciente encontrado',
        HttpStatus.NO_CONTENT,
      );
    }

    return pacientes;
  }

  public async findOne(id: string): Promise<Paciente> {
    return await this.pacienteRepository.findOne({ where: { id: id } });
  }

  public async findEmail(email: string): Promise<Paciente | null> {
    return await this.pacienteRepository.findOne({ where: { email: email } });
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
