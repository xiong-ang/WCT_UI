import { Component, OnInit } from '@angular/core';
import { CompareHelperService } from '../../Common/compare-helper.service';
import { WctWebWrapperService } from '../../Common/wct-web-wrapper.service';
import { Router } from '@angular/router';
import { CompareResult } from '../compareResult';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  detailShown: boolean = false;

  summaryTreeData: any;
  leftTreeData: any;
  rightTreeData: any;
  leftListData: any;
  rightListData: any;

  constructor(private compareHelper: CompareHelperService,
    private wtcService: WctWebWrapperService,
    private router: Router) {

    if (this.wtcService.token == null) {
      this.router.navigateByUrl('Login');
    }

    this.summaryTreeData = this.compareResult.SummaryTreeSource.source;
  }

  ngOnInit() {
  }


  onSelectLeafChange(pathKey: string) {
    this.detailShown = true;

    let leftNode = this.compareResult.getLeftNode(pathKey);
    this.leftListData = leftNode?leftNode.TableSource:{};
    let rightNode = this.compareResult.getRightNode(pathKey);
    this.rightListData = rightNode? rightNode.TableSource:{};
  }

  onSelectNodeChange(pathKey: string) {
    this.detailShown = false;

    this.leftTreeData = this.compareResult.getSummaryNode(pathKey).leftTreeSource.source;
    this.rightTreeData = this.compareResult.getSummaryNode(pathKey).rightTreeSource.source;
  }

  closeDetailShown() {
    this.detailShown = false;
  }

  get compareResult() {
    //return new CompareResult(this.compareHelper.currentCompareResult);
    return this.testData;
  }

  testData: CompareResult = new CompareResult({
    "root": {
      "name": "Summary",
      "compareMode": 2,
      "componentType": 0,
      "children": [
        {
          "name": "Controller",
          "compareMode": 2,
          "componentType": 1,
          "children": [],
          "leftList": [
            {
              "name": "properties",
              "compareMode": 2,
              "componentType": 1,
              "children": [
                {
                  "name": "properties123",
                  "compareMode": 2,
                  "componentType": 1,
                  "children": [],
                  "properties": [{
                    "name": "catalogNO",
                    "Properties": [
                      [
                        "key1", "value1"
                      ],
                      [
                        "key2", "value3"
                      ]
                    ],
                    "compareMode": 2,
                    "componentType": 2
                  },
                  {
                    "name": "catalogNO2",
                    "properties": [
                      [
                        "key1", "value1"
                      ],
                      [
                        "key2", "value3"
                      ]
                    ],
                    "compareMode": 2,
                    "componentType": 2
                  }]
                }
              ],
              "properties": [
                {
                  "name": "catalogNO",
                  "properties": [
                    [
                      "key1", "value1"
                    ],
                    [
                      "key2", "value3"
                    ]
                  ],
                  "compareMode": 2,
                  "componentType": 2
                },
                {
                  "name": "catalogNO2",
                  "properties": [
                    [
                      "key1", "value1"
                    ],
                    [
                      "key2", "value3"
                    ]
                  ],
                  "compareMode": 2,
                  "componentType": 2
                }
              ]
            }
          ],
          "rightList": [
            {
              "name": "properties",
              "compareMode": 2,
              "componentType": 1,
              "children": [
                {
                  "name": "properties456",
                  "compareMode": 2,
                  "componentType": 1,
                  "children": [],
                  "properties": [{
                    "name": "catalogNO",
                    "properties": [
                      [
                        "key1", "value1"
                      ],
                      [
                        "key2", "value3"
                      ]
                    ],
                    "compareMode": 2,
                    "componentType": 2
                  },
                  {
                    "name": "catalogNO2",
                    "properties": [
                      [
                        "key1", "value1"
                      ],
                      [
                        "key2", "value3"
                      ]
                    ],
                    "compareMode": 2,
                    "componentType": 2
                  }]
                }
              ],
              "properties": [
                {
                  "name": "catalogNO",
                  "properties": [
                    [
                      "key1", "value1"
                    ],
                    [
                      "key2", "value3"
                    ]
                  ],
                  "compareMode": 2,
                  "componentType": 2
                },
                {
                  "name": "catalogNO2",
                  "properties": [
                    [
                      "key1", "value1"
                    ],
                    [
                      "key2", "value3"
                    ]
                  ],
                  "compareMode": 2,
                  "componentType": 2
                }
              ]
            }
          ]
        }
      ],
      "leftList": [],
      "rightList": []
    }
  });
}