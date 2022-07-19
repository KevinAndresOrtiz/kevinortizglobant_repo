import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { OrganizacionService } from '../organizacion/organizacion.service';
import { Tribu } from './entities/tribu.entity';
import { TribuService } from './tribu.service';
import { Repository } from 'typeorm';

describe('TribuService', () => {
  let service: TribuService;
  let repository: Repository<Tribu>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: HttpService,
          useValue: {
            axiosRef: jest.fn(),
            makeObservable: jest.fn(),
          },
        },
        {
          provide: TribuService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            findById: jest.fn(),
            generateReport: jest.fn(),
            findByTribuId: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(Tribu),
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            findById: jest.fn(),
            generateReport: jest.fn(),
            findByTribuId: jest.fn(),
          },
        },
        {
          provide: OrganizacionService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TribuService>(TribuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
