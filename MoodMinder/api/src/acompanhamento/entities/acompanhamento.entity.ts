import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Profissional } from 'src/profissional/entities/profissional.entity';

@Entity()
export class Acompanhamento extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'idPaciente', type: 'varchar', nullable: false })
  @ManyToOne(() => Paciente, { eager: true })
  @JoinColumn({ name: 'idPaciente' })
  idPaciente: string;

  @Column({ name: 'idProfissional', type: 'varchar', nullable: false })
  @ManyToOne(() => Profissional, { eager: true })
  @JoinColumn({ name: 'idProfissional' })
  idProfissional: string;

  @Column({ name: 'dtInicio', type: 'date' })
  dtInicio: Date;

  @Column({ name: 'dtFim', type: 'date', default: null })
  dtFim: Date;
}
