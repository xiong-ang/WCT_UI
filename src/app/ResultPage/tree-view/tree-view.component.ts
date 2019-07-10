import { Component, EventEmitter, Input, Output, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';
import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TreeViewComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  @Output() selectChanged = new EventEmitter<string>();

  @ViewChild('myTree', { static: false }) myTree: jqxTreeComponent;
  @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;

  @Input()
  source: any[];/* =
    [
      {
        icon: '../../assets/images/mailIcon.png', label: 'Mail', expanded: true,// selected: true,
        items:
          [
            {
              icon: '../../assets/images/calendarIcon.png', label: 'Calendar', expanded: true,
              items:
                [
                  { icon: '../../assets/images/folder.png', label: 'Admin' },
                  { icon: '../../assets/images/folder.png', label: 'Corporate' },
                  { icon: '../../assets/images/folder.png', label: 'Finance' },
                  { icon: '../../assets/images/folder.png', label: 'Other' },
                ]
            },
            { icon: '../../assets/images/contactsIcon.png', label: 'Contacts' }
          ]
      },
      {
        icon: '../../assets/images/folder.png', label: 'Inbox', expanded: true,
        items:
          [
            { icon: '../../assets/images/folder.png', label: 'Admin' },
            { icon: '../../assets/images/folder.png', label: 'Corporate' },
            { icon: '../../assets/images/folder.png', label: 'Finance' },
            { icon: '../../assets/images/folder.png', label: 'Other' },
          ]
      },
      { icon: '../../assets/images/recycle.png', label: 'Deleted Items' },
      { icon: '../../assets/images/notesIcon.png', label: 'Notes' },
      { iconsize: 14, icon: '../../assets/images/settings.png', label: 'Settings' },
      { icon: '../../assets/images/favorites.png', label: 'Favorites' },
    ];
*/
  myTreeOnSelect(event: any): void {
    let args = event.args;
    let item: any = this.myTree.getItem(args.element);
    let pathKey = item.value;
    
    this.selectChanged.emit(pathKey);
  };

  myTreeOnExpand(event: any): void {
  };

  myTreeOnCollapse(event: any): void {
  };
}
