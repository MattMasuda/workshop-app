import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fh-release-list',
  templateUrl: './release-list.component.html',
  styleUrls: ['./release-list.component.css']
})
export class ReleaseListComponent implements OnInit {

  @Input() releases : any[];
  @Input() filterCriteria: any;

  count: number = 0;

  constructor() { 

  }

  ngOnInit() {}
  
  ngOnChanges() {
    if (this.releases) {
    this.releases.sort((left, right)=> { 
      if (left.customer > right.customer) return 1;
      if (left.customer < right.customer) return -1;
      return 0;
    });
    this.count = this.releases.length; 
  }
  }

}
