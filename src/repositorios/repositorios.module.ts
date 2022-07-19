import { Module } from '@nestjs/common';
import { RepositoriosService } from './repositorios.service';
import { RepositoriosController } from './repositorios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repositorio } from './entities/repositorio.entity';
import { Tribu } from '../tribu/entities/tribu.entity';
import { TribuModule } from '../tribu/tribu.module';

@Module({
  imports: [TribuModule, TypeOrmModule.forFeature([Repositorio, Tribu])],
  controllers: [RepositoriosController],
  providers: [RepositoriosService],
  exports: [RepositoriosService],
})
export class RepositoriosModule {}
