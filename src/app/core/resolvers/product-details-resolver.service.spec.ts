import { TestBed } from '@angular/core/testing';

import { ProductDetailsResolverService } from './product-details-resolver.service';

describe('ProductDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductDetailsResolverService = TestBed.get(ProductDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
