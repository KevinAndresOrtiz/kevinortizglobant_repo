import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
