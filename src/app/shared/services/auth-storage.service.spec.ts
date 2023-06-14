import { TestBed } from '@angular/core/testing';

import { authStorageService } from './auth-storage.service';

describe('AuthStorageService', () => {
  let service: authStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(authStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
