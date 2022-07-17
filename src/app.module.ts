import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizacionModule } from './organizacion/organizacion.module';
import { TribuModule } from './tribu/tribu.module';
import { RepositoriosModule } from './repositorios/repositorios.module';
import { MetricasModule } from './metricas/metricas.module';

@Module({
  imports: [OrganizacionModule, TribuModule, RepositoriosModule, MetricasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
