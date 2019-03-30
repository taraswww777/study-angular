import _ from 'lodash';
import { Component, Input, OnInit } from '@angular/core';
import block from 'bem-ts';
// app
import { DEFAULT_PATH_TO_ID, DEFAULT_PATH_TO_TITLE, DropdownListOptions } from './contract';

const COMPONENT_NAME = 'app-dropdown-list';

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
	private currentValueItem: object = {};
	private title = '';
	private bem = block(COMPONENT_NAME);

	@Input()
	set options(options: DropdownListOptions<any>) {
		this.items = options.items;
		this.pathToID = options.pathToID || DEFAULT_PATH_TO_ID;
		this.pathToTitle = options.pathToTitle || DEFAULT_PATH_TO_TITLE;
		this.title = options.title ? options.title : this.title;
	}

	onClickItem(valueItem: object) {
		console.log('valueItem:', valueItem);
		this.changeCurrentValueItem(valueItem);
		this.toggle();
	}

	changeCurrentValueItem(valueItem: object) {
		this.currentValueItem = valueItem;
		console.log('this.currentValueItem:', this.currentValueItem);
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
