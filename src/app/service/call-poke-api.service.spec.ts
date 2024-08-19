import { TestBed } from '@angular/core/testing';

import { CallPokeApiService } from './call-poke-api.service';

describe('CallPokeApiService', () => {
  let service: CallPokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallPokeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
