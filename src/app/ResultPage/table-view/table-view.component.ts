import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  @Input()
  source: any;

  get displayedColumns() {
    return this.source.displayedColumns;
  }
  get dataSource() {
    return this.source.sourceData;
  }

  constructor() { }

  ngOnInit() {
  }

}
