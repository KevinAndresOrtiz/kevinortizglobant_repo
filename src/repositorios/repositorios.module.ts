import { Module } from '@nestjs/common';
import { RepositoriosService } from './repositorios.service';
import { RepositoriosController } from './repositorios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repositorio } from './entities/repositorio.entity';
import { Tribu } from 'src/tribu/entities/tribu.entity';
import { TribuService } from 'src/tribu/tribu.service';

@Module({
  imports: [TribuService, TypeOrmModule.forFeature([Repositorio, Tribu])],
  controllers: [RepositoriosController],
  providers: [RepositoriosService],
  exports: [RepositoriosService],
})
export class RepositoriosModule {}
