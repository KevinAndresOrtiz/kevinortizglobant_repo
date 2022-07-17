import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

enum State {
  E = 'Enable',
  D = 'Disable',
  A = 'Archived',
}

enum Status {
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
    type: 'enum',
    enum: State,
    default: State.E,
  })
  state: State;
  @Column({
    type: 'enum',
    enum: Status,
    default: Status.A,
  })
  status: Status;
  @CreateDateColumn({
    type: 'timestamptz',
  })
  create_time: Date;
}
