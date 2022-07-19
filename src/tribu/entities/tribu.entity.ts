import { Organizacion } from '../../organizacion/entities/organizacion.entity';
import { Repositorio } from '../../repositorios/entities/repositorio.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
@Entity()
export class Tribu {
  @PrimaryGeneratedColumn()
  id_tribe: number;
  @Column({
    type: 'varchar',
    length: 800,
    nullable: false,
  })
  name: string;
  @Column({
    type: 'integer',
    nullable: false,
  })
  status: number;
  @ManyToOne(() => Organizacion, (organizacion) => organizacion.tribus)
  organizacion: Organizacion;
  @OneToMany(() => Repositorio, (repositorio) => repositorio.tribu)
  repositorios: Repositorio[];
}
