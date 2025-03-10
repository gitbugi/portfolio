import { TestBed } from '@angular/core/testing';

import { LogikService } from './logik.service';

describe('TestService', () => {
  let service: LogikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
