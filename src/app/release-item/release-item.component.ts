import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fh-release-item',
  templateUrl: './release-item.component.html',
  styleUrls: ['./release-item.component.css']
})
export class ReleaseItemComponent implements OnInit {

  @Input() item : any;
  constructor() { }

  ngOnInit() {
  }

}
