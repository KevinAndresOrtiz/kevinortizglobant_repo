import { Module } from '@nestjs/common';
import { MetricasService } from './metricas.service';
import { MetricasController } from './metricas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metrica } from './entities/metrica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Metrica])],
  controllers: [MetricasController],
  providers: [MetricasService],
})
export class MetricasModule {}
