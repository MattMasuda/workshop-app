import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fh-release-filter',
  templateUrl: './release-filter.component.html',
  styleUrls: ['./release-filter.component.css']
})
export class ReleaseFilterComponent implements OnInit {

  customerFilter: any = {};

  customers: any[] = [ 
    { name: 'FH' },
    { name: 'Airops' },
    { name: 'LKA' },
    { name: 'CCI' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

  setCustomerFilter(customer : string): void {
    this.customerFilter.name = customer;
  }
}
