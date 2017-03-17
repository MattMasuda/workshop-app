import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fh-release-list',
  templateUrl: './release-list.component.html',
  styleUrls: ['./release-list.component.css']
})
export class ReleaseListComponent implements OnInit {

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

  count: number = 0;

  constructor() { 
    this.releases.sort((left, right)=> { 
      if (left.customer > right.customer) return 1;
      if (left.customer < right.customer) return -1;
      return 0;
    });
    this.count = this.releases.length; 
  }

  ngOnInit() {
  }

}
