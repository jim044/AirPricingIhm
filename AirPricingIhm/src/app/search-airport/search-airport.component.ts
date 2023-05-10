import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-airport',
  templateUrl: './search-airport.component.html',
  styleUrls: ['./search-airport.component.css']
})
export class SearchAirportComponent implements OnInit, OnDestroy {
  searchFlightGroup!: FormGroup;

  constructor(private fb: FormBuilder){
   
  }

  ngOnInit(): void {
    this.searchFlightGroup = this.fb.group({
      parent: ['', Validators.required]
    });
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
 
}
