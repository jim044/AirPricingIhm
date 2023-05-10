import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAirportComponent } from './search-airport.component';

describe('SearchAirportComponent', () => {
  let component: SearchAirportComponent;
  let fixture: ComponentFixture<SearchAirportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAirportComponent]
    });
    fixture = TestBed.createComponent(SearchAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
