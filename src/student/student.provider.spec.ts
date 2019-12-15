import { Test, TestingModule } from '@nestjs/testing';
import { StudentProvider } from './student.provider';

describe('StudentProvider', () => {
  let provider: StudentProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentProvider],
    }).compile();

    provider = module.get<StudentProvider>(StudentProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
