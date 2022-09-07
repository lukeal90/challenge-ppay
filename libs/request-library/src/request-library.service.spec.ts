import { Test, TestingModule } from '@nestjs/testing';
import { RequestLibraryService } from './request-library.service';

describe('RequestLibraryService', () => {
  let service: RequestLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestLibraryService],
    }).compile();

    service = module.get<RequestLibraryService>(RequestLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
