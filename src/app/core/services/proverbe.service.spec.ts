import { TestBed } from '@angular/core/testing';

import { ProverbeService } from './proverbe.service';

describe('ProverbeService', () => {
  let service: ProverbeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProverbeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
