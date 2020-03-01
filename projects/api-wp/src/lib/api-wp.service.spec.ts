import { TestBed } from '@angular/core/testing';

import { ApiWpService } from './api-wp.service';

describe('ApiWpService', () => {
  let service: ApiWpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiWpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
