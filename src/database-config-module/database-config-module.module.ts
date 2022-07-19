import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { URL } from 'url';
import { Organizacion } from 'src/organizacion/entities/organizacion.entity';
import { Tribu } from 'src/tribu/entities/tribu.entity';
import { Repositorio } from 'src/repositorios/entities/repositorio.entity';
import { Metrica } from 'src/metricas/entities/metrica.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'cockroachdb',
        host: configService.get('DATABASE_HOST'),
        port: parseInt(configService.get('DATABASE_PORT')) || 26257,
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        synchronize: configService.get('DATABASE_SYNCRONIZE') || false,
        entities: [Organizacion, Tribu, Repositorio, Metrica],
        ssl: true,
        extra: {
          options: new URL(configService.get('DATABASE_URL')).searchParams.get(
            'options',
          ),
        },
        migrations: ['src/databases/migrations/*.ts'],
        cli: {
          migrationsDir: 'src/databases/migrations',
        },
      }),
    }),
  ],
})
export class DatabaseConfigModuleModule {}
