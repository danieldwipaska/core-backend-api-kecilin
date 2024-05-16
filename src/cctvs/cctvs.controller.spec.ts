import { Test, TestingModule } from '@nestjs/testing';
import { CctvsController } from './cctvs.controller';
import { CctvsService } from './cctvs.service';

describe('CctvsController', () => {
  let controller: CctvsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CctvsController],
      providers: [CctvsService],
    }).compile();

    controller = module.get<CctvsController>(CctvsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
