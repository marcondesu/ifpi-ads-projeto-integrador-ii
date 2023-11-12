import { SexoEnum } from 'src/sexo';

export class CreateProfissionalDto {
  nome: string;
  crm: string;
  especialidade: string;
  sexo: SexoEnum;
  email: string;
  nascimento: Date;
}
