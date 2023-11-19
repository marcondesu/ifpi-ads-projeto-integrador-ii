import { SexoEnum } from 'src/sexo';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profissional extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', type: 'varchar', nullable: false })
  nome: string;

  @Column({ name: 'crm', type: 'varchar', nullable: false })
  crm: string;

  @Column({ name: 'especialidade', type: 'varchar', nullable: false })
  especialidade: string;

  @Column({ name: 'sexo', type: 'varchar', nullable: false })
  sexo: SexoEnum;

  @Column({ name: 'email', type: 'varchar', nullable: false })
  email: string;

  @Column({ name: 'senha', type: 'varchar', nullable: false })
  senha: string;

  @Column({ name: 'nascimento', nullable: false })
  nascimento: Date;
}
