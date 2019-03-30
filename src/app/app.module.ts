import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';

@NgModule({
	declarations: [
		AppComponent,
		DropdownListComponent,
	],
	imports: [
		BrowserModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
