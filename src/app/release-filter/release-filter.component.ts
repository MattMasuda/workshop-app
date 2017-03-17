import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fh-release-filter',
  templateUrl: './release-filter.component.html',
  styleUrls: ['./release-filter.component.css']
})
export class ReleaseFilterComponent implements OnInit {

  @Output() filterUpdated = new EventEmitter();

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
    let newObject = Object.assign({}, this.customerFilter);
    newObject.name = customer;
    this.customerFilter = newObject;
    this.filterUpdated.emit(this.customerFilter);
  }
}
