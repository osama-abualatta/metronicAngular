import { TestBed } from '@angular/core/testing';

import { EmpCrudService } from './emp-crud.service';

describe('EmpCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpCrudService = TestBed.get(EmpCrudService);
    expect(service).toBeTruthy();
  });
});
