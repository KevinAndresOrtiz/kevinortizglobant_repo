import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tribu } from '../tribu/entities/tribu.entity';
import { TribuModule } from '../tribu/tribu.module';
import { Repositorio } from './entities/repositorio.entity';
import { RepositoriosService } from './repositorios.service';

describe('RepositoriosService', () => {
  let service: RepositoriosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TribuModule, TypeOrmModule.forFeature([Repositorio, Tribu])],
      providers: [RepositoriosService],
    }).compile();

    service = module.get<RepositoriosService>(RepositoriosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
