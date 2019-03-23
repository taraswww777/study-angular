import _ from 'lodash';
import { Component, Input, OnInit } from '@angular/core';
// app
import { DEFAULT_PATH_TO_ID, DEFAULT_PATH_TO_TITLE, DropdownListOptions } from './contract';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss'],
})
export class DropdownListComponent implements OnInit {
  items: object[] = [];
  isOpen = false;

  private pathToID: string = DEFAULT_PATH_TO_ID;
  private pathToTitle: string = DEFAULT_PATH_TO_TITLE;

  constructor() {}

  @Input()
  set options(options: DropdownListOptions<any>) {
    this.items = options.items;
    this.pathToID = options.pathToID || DEFAULT_PATH_TO_ID;
    this.pathToTitle = options.pathToTitle || DEFAULT_PATH_TO_TITLE;
  }

  getItemTitle(item: object): string {
    return _.get(item, this.pathToTitle);
  }

  getItemID(item: object): string {
    return _.get(item, this.pathToID);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
  }

}
