import { Component, OnInit } from '@angular/core';
import { CompareHelperService } from '../../Common/compare-helper.service';
import { WctWebWrapperService } from '../../Common/wct-web-wrapper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  compareResult: any;

  constructor(private compareHelper: CompareHelperService,
    private wtcService: WctWebWrapperService,
    private router: Router) {

    if (this.wtcService.token == null) {
      this.router.navigateByUrl('Login');
    }

    this.compareResult = this.compareHelper.currentCompareResult;
  }

  ngOnInit() {
  }

  getTestResult() {
    return JSON.stringify(this.compareResult);
  }
}
