import { LoginUserService } from './login.service';
import { TestBed } from '@angular/core/testing';

describe('LoginUserService', () => {
  let service: LoginUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
