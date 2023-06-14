import { TestBed } from '@angular/core/testing';

import { DiabetesTypesService } from './diabetes-types.service';

describe('DiabetesTypesService', () => {
  let service: DiabetesTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiabetesTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
