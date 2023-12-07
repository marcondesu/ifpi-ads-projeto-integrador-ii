import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { Feedback } from './entities/feedback.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcompanhamentoModule } from 'src/acompanhamento/acompanhamento.module';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback]), AcompanhamentoModule],
  controllers: [FeedbackController],
  providers: [FeedbackService],
  exports: [FeedbackService],
})
export class FeedbackModule {}
