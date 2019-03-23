export const DEFAULT_PATH_TO_ID = 'ID';
export const DEFAULT_PATH_TO_TITLE = 'title';

export interface DropdownListItemDefault {
  ID: string | number;
  title: string;
}

export interface DropdownListOptions<Item> {
  items?: Item[];
  pathToID?: string;
  pathToTitle?: string;
}
