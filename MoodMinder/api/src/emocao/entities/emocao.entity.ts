    import { CategoriaEmocao } from 'src/Categoria';
    import { Paciente } from 'src/paciente/entities/paciente.entity';
    import { Privacidade } from 'src/privacidade';
    import {
      BaseEntity,
      Column,
      Entity,
      JoinColumn,
      ManyToOne,
      PrimaryGeneratedColumn,
    } from 'typeorm';

    @Entity()
    export class Emocao extends BaseEntity {
      @PrimaryGeneratedColumn('uuid')
      id: string;

      @Column({ name: 'idPaciente', type: 'varchar', nullable: false })
      @ManyToOne(() => Paciente, { eager: true })
      @JoinColumn({ name: 'idPaciente' })
      idPaciente: string;

      @Column({ name: 'categoria', type: 'varchar', nullable: false })
      categoria: CategoriaEmocao;

      @Column({ name: 'intensidade', type: 'int', nullable: false })
      intensidade: number;

      @Column({ name: 'descricao', type: 'text', nullable: true })
      descricao: string;

      @Column({ name: 'contexto', type: 'text', nullable: false })
      contexto: string;

      @Column({ name: 'privacidade', type: 'varchar', default: 'publico' })
      privacidade: Privacidade;

      @Column({ name: 'data', type: 'date' })
      data: Date;

      mudarPrivacidade(): void {
        if (this.privacidade == Privacidade.PUBLICO) {
          this.privacidade = Privacidade.PRIVADO;
        } else {
          this.privacidade = Privacidade.PUBLICO;
        }
      }
    }
