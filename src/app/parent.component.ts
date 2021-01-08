import { Component, Input } from "@angular/core";
import { ListItem } from "./list-item";

@Component({
  selector: "parent",
  template: `
    <child-list [items]="items"></child-list>
  `,
  styles: [``]
})
export class ParentComponent {
  items: ListItem[];

  constructor() {
    this.items = [
      { name: "list item 1", display: false },
      { name: "list item 2", display: false },
      { name: "list item 3", display: false },
      { name: "list item 4", display: false }    
    ];
  }
}
