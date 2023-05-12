import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-airport',
  templateUrl: './search-airport.component.html',
  styleUrls: ['./search-airport.component.css']
})
export class SearchAirportComponent implements OnInit, OnDestroy {

  searchFlightformGroup!: FormGroup;
/*   rangeDate!: FormGroup;
 */
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
/*     this.rangeDate = new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    }); */
    
    this.searchFlightformGroup = this.fb.group({
      flightStart: ['', Validators.required],
      flightEnd: ['', Validators.required],
      filterWayControl: ['', Validators.required],
      rangeDate : this.fb.group({
        start: ['', Validators.required],
        end: ['', Validators.required],
      })
    });

    
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(arg0: any) {
    throw new Error('Method not implemented.');
  }
 
}
