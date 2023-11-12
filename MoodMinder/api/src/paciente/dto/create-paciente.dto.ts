import { SexoEnum } from 'src/sexo';

export class CreatePacienteDto {
  nome: string;
  cpf: string;
  sexo: SexoEnum;
  email: string;
  nascimento: Date;
}
