import { Module } from '@nestjs/common';
import { TribuService } from './tribu.service';
import { TribuController } from './tribu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tribu } from './entities/tribu.entity';
import { Organizacion } from 'src/organizacion/entities/organizacion.entity';
import { OrganizacionModule } from 'src/organizacion/organizacion.module';

@Module({
  imports: [
    OrganizacionModule,
    TypeOrmModule.forFeature([Tribu, Organizacion]),
  ],
  controllers: [TribuController],
  providers: [TribuService],
  exports: [TribuService],
})
export class TribuModule {}
