import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedbackDto {
  @ApiProperty({
    type: String,
    description: 'ID do acompanhamento no qual o feedback será dado',
    required: true,
  })
  idAcompanhamento: string;

  @ApiProperty({
    type: Number,
    default: 10,
    description: 'Nota de 0 a 10 para o acompanhamento',
    required: true,
  })
  nota: number;

  @ApiProperty({
    type: String,
    default:
      'Me sinto confortável para dizer o que sinto. Estou percebendo melhoras no dia a dia.',
    description: 'Comentário sobre como está sendo o acompanhamento',
    required: false,
  })
  texto: string;
}
