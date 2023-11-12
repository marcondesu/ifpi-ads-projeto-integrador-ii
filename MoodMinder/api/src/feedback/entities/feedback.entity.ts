/* eslint-disable prettier/prettier */
import { Acompanhamento } from 'src/acompanhamento/entities/acompanhamento.entity';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Feedback extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'idAcompanhamento', type: 'varchar', nullable: false })
  @ManyToOne(() => Acompanhamento, { eager: true })
  @JoinColumn({ name: 'idAcompanhamento' })
  idAcompanhamento: string;

  @Column({ name: 'nota', type: 'int', nullable: false })
  nota: number;

  @Column({ name: 'texto', type: 'text', nullable: true })
  texto: string;

  @Column({ name: 'data', type: 'date' })
  data: Date;
}
