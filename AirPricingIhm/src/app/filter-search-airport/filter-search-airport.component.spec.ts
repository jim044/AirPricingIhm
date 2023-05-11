import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSearchAirportComponent } from './filter-search-airport.component';

describe('FilterSearchAirportComponent', () => {
  let component: FilterSearchAirportComponent;
  let fixture: ComponentFixture<FilterSearchAirportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterSearchAirportComponent]
    });
    fixture = TestBed.createComponent(FilterSearchAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
