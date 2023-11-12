import { SexoEnum } from 'src/sexo';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePacienteDto {
  @ApiProperty({
    type: String,
    description: 'Nome do paciente',
    default: 'Van Gogh',
    required: true,
  })
  nome: string;

  @ApiProperty({
    type: String,
    description: 'CPF do paciente',
    default: '12345678901',
    required: true,
  })
  cpf: string;

  @ApiProperty({
    type: String,
    description: 'Sexo do paciente',
    default: 'masculino',
    required: true,
  })
  sexo: SexoEnum;

  @ApiProperty({
    type: String,
    description: 'E-mail do paciente',
    default: 'van.gogh@gmail.com',
    required: true,
  })
  email: string;

  @ApiProperty({
    type: Date,
    description: 'Data de nascimento do paciente',
    default: '2001-12-27',
    required: true,
  })
  nascimento: Date;
}
