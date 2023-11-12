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

  @Column({ name: 'cpf', type: 'varchar', nullable: false })
  cpf: string;

  @Column({ name: 'sexo', type: 'varchar', nullable: false })
  sexo: SexoEnum;

  @Column({ name: 'email', type: 'varchar', nullable: false })
  email: string;

  @Column({ name: 'nascimento', nullable: false })
  nascimento: Date;
}
