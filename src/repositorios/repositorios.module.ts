import { Module } from '@nestjs/common';
import { RepositoriosService } from './repositorios.service';
import { RepositoriosController } from './repositorios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repositorio } from './entities/repositorio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Repositorio])],
  controllers: [RepositoriosController],
  providers: [RepositoriosService],
})
export class RepositoriosModule {}
