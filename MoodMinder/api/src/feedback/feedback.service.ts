import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './entities/feedback.entity';
import { DeleteResult, In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { AcompanhamentoService } from 'src/acompanhamento/acompanhamento.service';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    public feedbackRepository: Repository<Feedback>,
    private acompanhamentoService: AcompanhamentoService,
    private jwtService: JwtService,
  ) {}

  public async create(createFeedbackDto: CreateFeedbackDto) {
    const feedback = new Feedback();
    feedback.idAcompanhamento = createFeedbackDto.idAcompanhamento;
    feedback.nota = createFeedbackDto.nota;
    feedback.texto = createFeedbackDto.texto;
    feedback.data = new Date();

    return await this.feedbackRepository.save(feedback);
  }

  public async findAll(token: string): Promise<Feedback[]> {
    token = token.replace('Bearer ', '');
    const role = await this.extractRole(token);
    const acompanhamentos = await this.acompanhamentoService.findAll(token);
    const ids_acompanhamentos = acompanhamentos.map(
      (acompanhamento) => acompanhamento.id,
    );

    if (role == 'paciente') {
      return await this.feedbackRepository.find({
        where: { idAcompanhamento: In(ids_acompanhamentos) },
      });
    }

    return await this.feedbackRepository.find({
      where: { idAcompanhamento: In(ids_acompanhamentos) },
    });
  }

  public async findOne(id: string): Promise<Feedback> {
    return await this.feedbackRepository.findOne({ where: { id: id } });
  }

  private async extractUserId(token: string) {
    return this.jwtService.decode(token).sub;
  }

  private async extractRole(token: string) {
    return this.jwtService.decode(token).role;
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this.feedbackRepository.delete({ id: id });
  }
}
