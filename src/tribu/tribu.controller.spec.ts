import { Test, TestingModule } from '@nestjs/testing';
import { TribuController } from './tribu.controller';
import { TribuService } from './tribu.service';

describe('TribuController', () => {
  let controller: TribuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TribuController],
      providers: [TribuService],
    }).compile();

    controller = module.get<TribuController>(TribuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
