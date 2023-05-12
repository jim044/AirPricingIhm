import { TestBed } from '@angular/core/testing';

import { SearchAirportService } from './search-airport.service';

describe('SearchAirportService', () => {
  let service: SearchAirportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAirportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
