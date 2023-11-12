import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './entities/feedback.entity';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    public feedbackRepository: Repository<Feedback>,
  ) {}

  public async create(createFeedbackDto: CreateFeedbackDto) {
    const feedback = new Feedback();
    feedback.idAcompanhamento = createFeedbackDto.idAcompanhamento;
    feedback.nota = createFeedbackDto.nota;
    feedback.texto = createFeedbackDto.texto;
    feedback.data = new Date();

    return await this.feedbackRepository.save(feedback);
  }

  public async findAll(): Promise<Feedback[]> {
    return await this.feedbackRepository.find();
  }

  public async findOne(id: string): Promise<Feedback> {
    return await this.feedbackRepository.findOne({ where: { id: id } });
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this.feedbackRepository.delete({ id: id });
  }
}
