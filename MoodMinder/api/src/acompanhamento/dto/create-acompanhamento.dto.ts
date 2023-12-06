import { ApiProperty } from '@nestjs/swagger';

export class CreateAcompanhamentoDto {
  @ApiProperty({
    type: String,
    description: 'ID do paciente',
    required: true,
  })
  idPaciente: string;

  @ApiProperty({
    type: String,
    description: 'ID do profissional',
    required: true,
  })
  idProfissional: string;

  @ApiProperty({
    type: Date,
    description: 'Data de início do acompanhamento',
    default: '2023-05-22',
    required: true,
  })
  dtInicio: Date;
}
