import { Module } from '@nestjs/common';
import { TribuService } from './tribu.service';
import { TribuController } from './tribu.controller';

@Module({
  controllers: [TribuController],
  providers: [TribuService]
})
export class TribuModule {}
