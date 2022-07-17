import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizacionModule } from './organizacion/organizacion.module';
import { TribuModule } from './tribu/tribu.module';
import { RepositoriosModule } from './repositorios/repositorios.module';
import { MetricasModule } from './metricas/metricas.module';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { DatabaseConfigModuleModule } from './database-config-module/database-config-module.module';

@Module({
  imports: [
    OrganizacionModule,
    TribuModule,
    RepositoriosModule,
    MetricasModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseConfigModuleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly dataSource: DataSource) {}
}
