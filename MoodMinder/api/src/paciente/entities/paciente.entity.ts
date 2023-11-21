import { SexoEnum } from 'src/sexo';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Paciente extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'nome',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  nome: string;

  @Column({ name: 'cpf', type: 'varchar', nullable: false, unique: true })
  cpf: string;

  @Column({ name: 'sexo', type: 'varchar', nullable: false })
  sexo: SexoEnum;

  @Column({ name: 'email', type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ name: 'senha', type: 'varchar', nullable: false })
  senha: string;

  @Column({ name: 'nascimento', type: 'date', nullable: false })
  nascimento: Date;
}
