import { ApiProperty } from '@nestjs/swagger';
import { CategoriaEmocao } from 'src/Categoria';
import { Privacidade } from 'src/privacidade';

export class CreateEmocaoDto {
  @ApiProperty({
    type: String,
    description: 'ID do paciente',
    required: true,
  })
  idPaciente: string;

  @ApiProperty({
    enum: CategoriaEmocao,
    default: CategoriaEmocao.ALEGRIA,
    description: 'Emoção que o paciente está sentindo',
    required: true,
  })
  categoria: CategoriaEmocao;

  @ApiProperty({
    type: Number,
    default: 8,
    description: 'Intensidade da emoção (0 a 10)',
    required: true,
  })
  intensidade: number;

  @ApiProperty({
    type: String,
    default: 'Me sinto feliz.',
    description: 'Comentário sobre o que o paciente está sentindo',
    required: false,
  })
  descricao: string;

  @ApiProperty({
    type: String,
    default:
      'Cheguei meio tarde no almoço e a fila estava pequena, isso que é felicidade genuína!',
    description: 'Comentário sobre o quê desencadeou a emoção',
    required: true,
  })
  contexto: string;

  @ApiProperty({
    enum: Privacidade,
    default: Privacidade.PUBLICO,
    description:
      'Caso for público, o profissional que estiver acompanhando este paciente poderá ver o registro de emoção',
    required: false,
  })
  privacidade: Privacidade;
}
