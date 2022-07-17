import { Module } from '@nestjs/common';
import { RepositoriosService } from './repositorios.service';
import { RepositoriosController } from './repositorios.controller';

@Module({
  controllers: [RepositoriosController],
  providers: [RepositoriosService]
})
export class RepositoriosModule {}
