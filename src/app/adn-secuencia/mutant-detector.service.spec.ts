import { TestBed } from '@angular/core/testing';

import { MutantDetectorService } from './mutant-detector.service';

describe('MutantDetectorService', () => {
  let service: MutantDetectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutantDetectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
