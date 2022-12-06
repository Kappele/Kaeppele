import { Test, TestingModule } from '@nestjs/testing';
import { CountdownController } from './countdown.controller';

describe('CountdownController', () => {
  let controller: CountdownController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountdownController],
    }).compile();

    controller = module.get<CountdownController>(CountdownController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
