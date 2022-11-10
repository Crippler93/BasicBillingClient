import { TestBed } from '@angular/core/testing';

import { BillingAPIService } from './billing-api.service';

describe('BillingAPIService', () => {
  let service: BillingAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillingAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
