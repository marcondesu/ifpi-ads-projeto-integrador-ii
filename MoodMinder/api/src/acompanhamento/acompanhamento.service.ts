import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAcompanhamentoDto } from './dto/create-acompanhamento.dto';
import { Acompanhamento } from './entities/acompanhamento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Paciente } from 'src/paciente/entities/paciente.entity';

@Injectable()
export class AcompanhamentoService {
  constructor(
    @InjectRepository(Acompanhamento)
    private acompanhamentoRepository: Repository<Acompanhamento>,
    private jwtService: JwtService,
  ) {}

  public async create(createAcompanhamentoDto: CreateAcompanhamentoDto) {
    if (
      await this.verifyUnique(
        createAcompanhamentoDto.idPaciente,
        createAcompanhamentoDto.idProfissional,
      )
    ) {
      throw new HttpException('Requisição inválida', HttpStatus.BAD_REQUEST);
    }

    const acompanhamento = new Acompanhamento();
    acompanhamento.idPaciente = createAcompanhamentoDto.idPaciente;
    acompanhamento.idProfissional = createAcompanhamentoDto.idProfissional;
    acompanhamento.dtInicio = createAcompanhamentoDto.dtInicio;

    return await this.acompanhamentoRepository.save(acompanhamento);
  }

  public async finish(id: string, date: Date) {
    const acompanhamento = await this.findOne(id);

    if (!acompanhamento) {
      return null;
    }

    acompanhamento.dtFim = date;
    return await this.acompanhamentoRepository.save(acompanhamento);
  }

  public async findAll(token: string): Promise<Acompanhamento[]> {
    token = token.replace('Bearer ', '');
    const user_id = await this.extractUserId(token);
    const role = await this.extractRole(token);

    if (role == 'paciente') {
      return await this.acompanhamentoRepository.find({
        where: { idPaciente: user_id },
      });
    }

    return await this.acompanhamentoRepository.find({
      where: { idProfissional: user_id },
    });
  }

  public async findOne(id: string): Promise<Acompanhamento> {
    return await this.acompanhamentoRepository.findOne({ where: { id: id } });
  }

  public async findPacientsFromProfessionalId(
    profissional_id: string,
  ): Promise<Paciente[]> {
    const acompanhamentos = await this.acompanhamentoRepository.find({
      where: { idProfissional: profissional_id }
    });

    const pacientes_id: any = acompanhamentos.map(
      (acompanhamento) => acompanhamento.idPaciente,
    );

    return pacientes_id;
  }

  private async extractUserId(token: string) {
    return this.jwtService.decode(token).sub;
  }

  private async extractRole(token: string) {
    return this.jwtService.decode(token).role;
  }

  private async verifyUnique(
    paciente_id: string,
    profissional_id: string,
  ): Promise<boolean> {
    const acompanhamento = await this.acompanhamentoRepository
      .createQueryBuilder('acompanhamento')
      .where('acompanhamento.idPaciente = :paciente_id', { paciente_id })
      .andWhere('acompanhamento.idProfissional = :profissional_id', {
        profissional_id,
      })
      .getOne();

    return !!acompanhamento;
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this.acompanhamentoRepository.delete({ id: id });
  }
}
