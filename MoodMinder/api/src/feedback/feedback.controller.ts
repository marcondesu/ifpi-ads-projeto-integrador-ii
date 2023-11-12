import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './entities/feedback.entity';
import { DeleteResult } from 'typeorm';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  async create(@Body() createFeedbackDto: CreateFeedbackDto) {
    return await this.feedbackService.create(createFeedbackDto);
  }

  @Get()
  async findAll() {
    return await this.feedbackService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Feedback> {
    return await this.feedbackService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    return await this.feedbackService.remove(id);
  }
}