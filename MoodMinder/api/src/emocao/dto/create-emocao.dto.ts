import { CategoriaEmocao } from 'src/Categoria';

export class CreateEmocaoDto {
  idPaciente: string;
  categoria: CategoriaEmocao;
  intensidade: number;
  descricao: string;
  contexto: string;
}
