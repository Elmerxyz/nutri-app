import { TestBed } from '@angular/core/testing';

import { RecipesServicesService } from './recipes-services.service';

describe('RecipesServicesService', () => {
  let service: RecipesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
