import { TestBed } from '@angular/core/testing';

import { SampleTestService } from './sample-test.service';

describe('SampleTestService', () => {
  let service: SampleTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
