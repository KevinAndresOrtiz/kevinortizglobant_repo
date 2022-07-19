import { Module } from '@nestjs/common';
import { MetricasService } from './metricas.service';
import { MetricasController } from './metricas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metrica } from './entities/metrica.entity';
import { Repositorio } from '../repositorios/entities/repositorio.entity';
import { RepositoriosModule } from '../repositorios/repositorios.module';

@Module({
  imports: [
    RepositoriosModule,
    TypeOrmModule.forFeature([Metrica, Repositorio]),
  ],
  controllers: [MetricasController],
  providers: [MetricasService],
})
export class MetricasModule {}
