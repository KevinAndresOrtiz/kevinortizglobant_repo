import { Repositorio } from '../../repositorios/entities/repositorio.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Metrica {
  @PrimaryGeneratedColumn()
  id_metrica: number;
  @Column({
    type: 'integer',
    nullable: false,
  })
  bugs: number;
  @Column({
    type: 'decimal',
    nullable: false,
  })
  coverage: number;
  @Column({
    type: 'integer',
    nullable: false,
  })
  vulnerabilities: number;
  @Column({
    type: 'integer',
    nullable: false,
  })
  hotspot: number;
  @Column({
    type: 'integer',
    nullable: false,
  })
  code_smells: number;
  @OneToOne(() => Repositorio, (repositorio) => repositorio.metrica)
  @JoinColumn()
  repositorio: Repositorio;
}
