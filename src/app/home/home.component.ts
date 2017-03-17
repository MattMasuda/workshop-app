import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  releases: any[] = [
    {
      "id": 1,
      "customer": "FH",
      "description": "IMH jar update"
    },
    {
      "id": 2,
      "customer": "Airops",
      "description": "FOMPS release"
    },
    {
      "id": 3,
      "customer": "LKA",
      "description": "RAFT change"
    }
  ]

  filter: any = {};

  constructor() { }

  ngOnInit() {
  }
  onFilterUpdated(updatedFilter): void {
   console.log("Criteria is: ", updatedFilter) 
   this.filter = updatedFilter;
  }
}
