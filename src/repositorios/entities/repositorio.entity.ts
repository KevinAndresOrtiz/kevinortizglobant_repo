import { Tribu } from 'src/tribu/entities/tribu.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

export enum State {
  E = 'Enabled',
  D = 'Disabled',
  A = 'Archived',
}

export enum Status {
  A = 'Active',
  I = 'Inactive',
}

@Entity()
export class Repositorio {
  @PrimaryGeneratedColumn()
  id_repository: number;
  @Column({
    type: 'varchar',
    length: 800,
    nullable: false,
  })
  name: string;
  @Column({
    type: 'varchar',
    length: 300,
    default: 'Enable',
  })
  state: string;
  @Column({
    type: 'varchar',
    length: 100,
    default: 'Active',
  })
  status: string;
  @CreateDateColumn({
    type: 'timestamptz',
  })
  create_time: Date;
  @ManyToOne(() => Tribu, (tribu) => tribu.repositorios)
  tribu: Tribu;
}
