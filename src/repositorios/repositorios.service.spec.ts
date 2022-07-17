import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriosService } from './repositorios.service';

describe('RepositoriosService', () => {
  let service: RepositoriosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepositoriosService],
    }).compile();

    service = module.get<RepositoriosService>(RepositoriosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
