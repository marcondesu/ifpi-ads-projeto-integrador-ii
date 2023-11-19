import { SexoEnum } from 'src/sexo';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfissionalDto {
  @ApiProperty({
    type: String,
    description: 'Nome do profissional',
    default: 'Sigmund Freud',
    required: true,
  })
  nome: string;

  @ApiProperty({
    type: String,
    description: 'CRM do profissional',
    default: 'CRM-PI 123456',
    required: true,
  })
  crm: string;

  @ApiProperty({
    type: String,
    description: 'Especialidade do profissional',
    default: 'Psiquiatra',
    required: true,
  })
  especialidade: string;

  @ApiProperty({
    type: String,
    description: 'Sexo do profissional',
    default: 'masculino',
    required: true,
  })
  sexo: SexoEnum;

  @ApiProperty({
    type: String,
    description: 'E-mail do profissional',
    default: 'sigmund.freud@gmail.com',
    required: true,
  })
  email: string;

  // @ApiProperty({
  //   type: String,
  //   description: 'Senha do profissional',
  //   default: 'senhasegura123',
  //   required: true,
  // })
  // senha: string;

  @ApiProperty({
    type: Date,
    description: 'Data de nascimento do profissional',
    default: '1971-06-15',
    required: true,
  })
  nascimento: Date;
}
