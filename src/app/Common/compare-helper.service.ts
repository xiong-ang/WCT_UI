import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompareHelperService {
  currentCompareResult: any;

  start = 0;
  count = 8;
  compareRecords:any[] = [];
  
  constructor() { }
}
