import { Tribu } from 'src/tribu/entities/tribu.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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
  @OneToMany(() => Tribu, (tribu) => tribu.organizacion)
  tribus: Tribu[];
}
