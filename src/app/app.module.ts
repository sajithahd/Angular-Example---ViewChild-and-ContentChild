import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { ChildListComponent } from './child-list.component';
import { ContentIdentifierDirective } from './content-identifier.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ParentComponent, ChildListComponent, ContentIdentifierDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
