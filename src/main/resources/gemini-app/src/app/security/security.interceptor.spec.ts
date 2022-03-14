import { SecurityInterceptor } from './security.interceptor';

import { TestBed } from '@angular/core/testing';

describe('SecurityInterceptor', () => {
  let service: SecurityInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
