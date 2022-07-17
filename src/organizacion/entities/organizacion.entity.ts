import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Organizacion {
  @PrimaryGeneratedColumn()
  id_organizacion: number;
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
