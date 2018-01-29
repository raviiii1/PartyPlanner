import { TestBed, inject } from '@angular/core/testing';

import { NewPartyService } from './new-party.service';

describe('NewPartyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewPartyService]
    });
  });

  it('should be created', inject([NewPartyService], (service: NewPartyService) => {
    expect(service).toBeTruthy();
  }));
});
