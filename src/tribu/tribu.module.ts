import { Module } from '@nestjs/common';
import { TribuService } from './tribu.service';
import { TribuController } from './tribu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tribu } from './entities/tribu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tribu])],
  controllers: [TribuController],
  providers: [TribuService],
})
export class TribuModule {}
