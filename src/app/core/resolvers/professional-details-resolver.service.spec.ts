import { TestBed } from '@angular/core/testing';

import { ProfessionalDetailsResolverService } from './professional-details-resolver.service';

describe('ProfessionalDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfessionalDetailsResolverService = TestBed.get(ProfessionalDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
