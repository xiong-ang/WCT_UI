import { Component, OnInit } from '@angular/core';
import { WctWebWrapperService } from '../../Common/wct-web-wrapper.service';
import { CompareHelperService } from '../../Common/compare-helper.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  compareInput: any = {
    projectName: null,
    file1: null,
    file2: null,
    config: {
      isIncludeAlltags: true,
      isIncludeTagDataValuesInCompare: true,
      isIncludeConstantTagDataValuesInCompare: false,
      isFilterTags: false,
      isIncludeDescriptionsInCompare: true
    }
  };

  isBackDisable = true;
  isNextDisable = true;

  constructor(private wtcService: WctWebWrapperService,
    private router: Router,
    private compareHelper: CompareHelperService) {

    if (this.wtcService.token == null) {
      this.router.navigateByUrl('Login');
    }

    setInterval(() => {
      // update compare records
      this.getCompareRecords();
    }, 4000);
  }

  ngOnInit() {

  }

  createProject() {
    let compareInputFormdata = new FormData();

    compareInputFormdata.append('Config', JSON.stringify(this.compareInput)); // Project Config
    compareInputFormdata.append('compare_file1', $('#compare_file1')[0].files[0]); // File name1
    compareInputFormdata.append('compare_file2', $('#compare_file2')[0].files[0]); // File name2

    this.wtcService.compare(compareInputFormdata);
    console.log(compareInputFormdata);
  }

  clearProject() {
    this.compareInput = {
      projectName: null,
      file1: null,
      file2: null,
      config: {
        isIncludeAlltags: true,
        isIncludeTagDataValuesInCompare: true,
        isIncludeConstantTagDataValuesInCompare: false,
        isFilterTags: false,
        isIncludeDescriptionsInCompare: true
      }
    };
    console.log(this.compareInput);
  }

  getCompareRecords() {
    this.wtcService.getCompareRecords(this.compareHelper.start, this.compareHelper.count + 1);

    this.isBackDisable = (this.compareHelper.start == 0);
    this.isNextDisable = (this.compareHelper.compareRecords.length < this.compareHelper.count);
  }

  back() {
    if (this.compareHelper.start >= this.compareHelper.count) {
      this.compareHelper.start -= this.compareHelper.count;
    }
  }

  next() {
    this.compareHelper.start += this.compareHelper.count;
  }
}
