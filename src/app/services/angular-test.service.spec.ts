import { TestBed } from '@angular/core/testing';

import { AngularTestService } from './angular-test.service';

describe('AngularTestService', () => {
  let service: AngularTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
