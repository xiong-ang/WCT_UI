import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CompareHelperService } from '../../Common/compare-helper.service'

@Component({
  selector: 'app-compare-status',
  templateUrl: './compare-status.component.html',
  styleUrls: ['./compare-status.component.css']
})
export class CompareStatusComponent implements OnInit {

  @Input()
  compareResult: any;

  constructor(private router: Router,
    private compareHelper: CompareHelperService) { }

  ngOnInit() {
  }

  viewResult() {
    this.compareHelper.currentCompareResult = this.compareResult;
    this.router.navigateByUrl('Result');
  }
}
