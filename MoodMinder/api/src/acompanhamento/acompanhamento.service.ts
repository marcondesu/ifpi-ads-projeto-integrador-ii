import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAcompanhamentoDto } from './dto/create-acompanhamento.dto';
import { Acompanhamento } from './entities/acompanhamento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Feedback } from 'src/feedback/entities/feedback.entity';
import { FeedbackService } from 'src/feedback/feedback.service';
import { JwtService } from '@nestjs/jwt';
import { Paciente } from 'src/paciente/entities/paciente.entity';

@Injectable()
export class AcompanhamentoService {
  constructor(
    @InjectRepository(Acompanhamento)
    private acompanhamentoRepository: Repository<Acompanhamento>,
    private feedbackService: FeedbackService,
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
    const user_id = await this.extractUserIdFromToken(token);

    return await this.acompanhamentoRepository
      .createQueryBuilder('acompanhamento')
      .where('acompanhamento.idPaciente = :user_id', { user_id })
      .andWhere('acompanhamento.dtFim IS NULL')
      .orWhere('acompanhamento.idProfissional = :user_id', {
        user_id,
      })
      .getMany();
  }

  public async findOne(id: string): Promise<Acompanhamento> {
    return await this.acompanhamentoRepository.findOne({ where: { id: id } });
  }

  public async findFeedbacks(id: string): Promise<Feedback[]> {
    return await this.feedbackService.feedbackRepository.find({
      where: { idAcompanhamento: id },
    });
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

  private async extractUserIdFromToken(token: string) {
    token = token.replace('Bearer ', '');

    return this.jwtService.decode(token).sub;
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
    this.feedbackService.feedbackRepository.delete({ idAcompanhamento: id });
    return await this.acompanhamentoRepository.delete({ id: id });
  }
}
