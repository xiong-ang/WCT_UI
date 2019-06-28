import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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


  @ViewChild('myTree', { static: false }) myTree: jqxTreeComponent;
  @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;
  source: any[] =
    [
      {
        icon: '../../assets/images/mailIcon.png', label: 'Mail', expanded: true,
        items:
          [
            { 
              icon: '../../assets/images/calendarIcon.png', label: 'Calendar' , expanded: true,
              items:
              [
                { icon: '../../assets/images/folder.png', label: 'Admin' },
                { icon: '../../assets/images/folder.png', label: 'Corporate' },
                { icon: '../../assets/images/folder.png', label: 'Finance' },
                { icon: '../../assets/images/folder.png', label: 'Other' },
              ]
            },
            { icon: '../../assets/images/contactsIcon.png', label: 'Contacts', selected: true }
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
  counter: number = 0;
  myTreeOnSelect(event: any): void {
    /*let args = event.args;
    let item = this.myTree.getItem(args.element);
    if (this.counter > 1) {
      this.myPanel.prepend('<div style="margin-top: 5px;">Selected: ' + item.label + '</div>');
    }
    this.counter++;*/
  };
  myTreeOnExpand(event: any): void {
    /*let args = event.args;
    let item = this.myTree.getItem(args.element);
    this.myPanel.prepend('<div style="margin-top: 5px;">Expanded: ' + item.label + '</div>');*/
  };
  myTreeOnCollapse(event: any): void {
    /*let args = event.args;
    let item = this.myTree.getItem(args.element);
    this.myPanel.prepend('<div style="margin-top: 5px;">Collapsed: ' + item.label + '</div>');*/
  };
}
