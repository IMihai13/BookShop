import { TestBed, inject } from '@angular/core/testing';

import { ApiProviderService } from './api-provider.service';

describe('ApiProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiProviderService]
    });
  });

  it('should be created', inject([ApiProviderService], (service: ApiProviderService) => {
    expect(service).toBeTruthy();
  }));
});
