import { Component } from '@angular/core';
import { DEFAULT_PATH_TO_ID, DEFAULT_PATH_TO_TITLE, DropdownListItemDefault, DropdownListOptions } from './dropdown-list/contract';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: DropdownListItemDefault[];
  dropdownOptions: DropdownListOptions<DropdownListItemDefault>;

  constructor() {
    this.items = [
      {ID: 1, title: 'any title 1'},
      {ID: 2, title: 'any title 2'},
      {ID: 3, title: 'any title 3'},
      {ID: 4, title: 'any title 4'},
      {ID: 5, title: 'any title 5'},
    ];

    this.dropdownOptions = {
      items: this.items,
      pathToID: DEFAULT_PATH_TO_ID,
      pathToTitle: DEFAULT_PATH_TO_TITLE,
    };
  }
}
