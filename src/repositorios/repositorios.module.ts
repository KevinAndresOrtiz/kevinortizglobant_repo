import { Module } from '@nestjs/common';
import { RepositoriosService } from './repositorios.service';
import { RepositoriosController } from './repositorios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repositorio } from './entities/repositorio.entity';
import { Tribu } from 'src/tribu/entities/tribu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Repositorio, Tribu])],
  controllers: [RepositoriosController],
  providers: [RepositoriosService],
})
export class RepositoriosModule {}
