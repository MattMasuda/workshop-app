import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ReleaseDataManager } from '../release-data-manager';

@Component({
  selector: 'fh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  releases: any[] = [];

  dataObs;

  filter: any = {};
  
  constructor(dataManager: ReleaseDataManager) {
      this.dataObs = dataManager.getData();
   }

  ngOnInit() {
  }
  onFilterUpdated(updatedFilter): void {
   console.log("Criteria is: ", updatedFilter) 
   this.filter = updatedFilter;
  }
}
