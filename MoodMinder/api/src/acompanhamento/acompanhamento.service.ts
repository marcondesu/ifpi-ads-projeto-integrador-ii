import { Injectable } from '@nestjs/common';
import { CreateAcompanhamentoDto } from './dto/create-acompanhamento.dto';
import { Acompanhamento } from './entities/acompanhamento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Feedback } from 'src/feedback/entities/feedback.entity';
import { FeedbackService } from 'src/feedback/feedback.service';

@Injectable()
export class AcompanhamentoService {
  constructor(
    @InjectRepository(Acompanhamento)
    private acompanhamentoRepository: Repository<Acompanhamento>,
    private feedbackService: FeedbackService,
  ) {}

  public async create(createAcompanhamentoDto: CreateAcompanhamentoDto) {
    const acompanhamento = new Acompanhamento();
    acompanhamento.idPaciente = createAcompanhamentoDto.idPaciente;
    acompanhamento.idProfissional = createAcompanhamentoDto.idProfissional;
    acompanhamento.dtInicio = createAcompanhamentoDto.dtInicio;
    acompanhamento.dtFim = createAcompanhamentoDto.dtFim;

    return await this.acompanhamentoRepository.save(acompanhamento);
  }

  public async findAll(): Promise<Acompanhamento[]> {
    return await this.acompanhamentoRepository.find();
  }

  public async findOne(id: string): Promise<Acompanhamento> {
    return await this.acompanhamentoRepository.findOne({ where: { id: id } });
  }

  public async findFeedback(id: string): Promise<Feedback[]> {
    return await this.feedbackService.feedbackRepository.find({
      where: { idAcompanhamento: id },
    });
  }

  public async remove(id: string): Promise<DeleteResult> {
    this.feedbackService.feedbackRepository.delete({ idAcompanhamento: id });
    return await this.acompanhamentoRepository.delete({ id: id });
  }
}
